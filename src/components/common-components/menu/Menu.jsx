import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from '../../../redux/actions';

import styled from 'styled-components';
import crossIcon from '../../../assets/icons/cross.svg';
import hamburgerIcon from '../../../assets/icons/hamburger.svg';
import { BORDER_COLOR, CONTAINER_BACKGROUND_COLOR } from '../../../constants/themeColors';
import SearchBar from '../input/SearchBar';
import Portal from '../portal/Portal';
import Survey from '../survey/Survey';
import MenuItem from './menu-item/MenuItem';
import MobileMenuItem from './mobile-menu-item/MobileMenuItem';

const Container = styled.nav`
  display: flex;
  z-index: 9;
  padding: 20px 50px;
  width: 100%;
  background: ${CONTAINER_BACKGROUND_COLOR};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${BORDER_COLOR};
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileList = styled.ul`
  display: none;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  background: ${CONTAINER_BACKGROUND_COLOR};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Icon = styled.img`
  display: none;
  cursor: pointer;
  top: 20px;
  right: 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Logout = styled.li`
  cursor: pointer;
`;

const Menu = (props) => {

  const { push } = useHistory();

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchSearchData = async (searchParam) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      if (!searchParam) {
        setSearchData(data.map((i) => ({ key: i.id, value: i.name })));
      } else
        setSearchData(
          data
            .filter((i) => i.name.includes(searchParam?.toString()))
            .map((i) => ({ key: i.id, value: i.name })),
        );
    };
    fetchSearchData(searchText);
  }, [searchText]);

  const logout = () => {
    props.dispatch(userActions.logout());
    push('/');
  }

  return (
    <>
      <Container>
        <h4>Your Logo</h4>
        <SearchBar
          onSelect={() => {}}
          placeholder="Search anything"
          searchVal={searchText}
          onChange={(v) => setSearchText(v)}
          data={searchData}
        />
        <List>
          <MenuItem label="Chat" to="/chat" />
          <MenuItem label="Games" to="/games" />
          <MenuItem label="My Clubs" to="/clubs" />
          {/* <MenuItem label="Profile" to="/profile" /> */}
          <MenuItem label="Profile" to="/my-profile" />
          <Logout onClick={logout} >Logout</Logout>
        </List>
        {isExpanded ? (
          <>
            <Portal>
              <>
                <MobileList>
                  <Icon
                    style={{ position: 'absolute' }}
                    onClick={() => setIsExpanded(false)}
                    alt="cross"
                    src={crossIcon}
                  />
                  <MobileMenuItem onClick={() => setIsExpanded(false)} label="Chat" to="/chat" />
                  <MobileMenuItem onClick={() => setIsExpanded(false)} label="Games" to="/games" />
                  <MobileMenuItem
                    onClick={() => setIsExpanded(false)}
                    label="My Clubs"
                    to="/clubs"
                  />
                  {/* <MobileMenuItem
                    onClick={() => setIsExpanded(false)}
                    label="Profile"
                    to="/profile"
                  /> */}
                  <MobileMenuItem
                    onClick={() => setIsExpanded(false)}
                    label="Profile"
                    to="/my-profile"
                  />
                </MobileList>
              </>
            </Portal>
          </>
        ) : (
          <Icon onClick={() => setIsExpanded(true)} alt="mobile-menu" src={hamburgerIcon} />
        )}
      </Container>
      <Survey />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Menu);
