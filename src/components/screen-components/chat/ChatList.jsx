import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import clockPost from '../../../assets/icons/clockPost.svg';
import usersIcon from '../../../assets/icons/usersIcon.svg';
import { APP_BACKGROUND_COLOR } from '../../../constants/themeColors';
import chatUserMock from '../../../mocks/chatUserMock';
import { setChatAction } from '../../../redux/actions/chat';
import SearchBar from '../../common-components/input/SearchBar';
import Text14 from '../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../common-components/wrappers/row-wrapper/RowWrapper';
import Avatar from '../shared/Avatar';

const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 16px;
  align-items: center;
  background-color: ${(props) => (props.isEven ? APP_BACKGROUND_COLOR : '#FFFFFF')};
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  &:hover {
    background-color: #edfbf1;
    transform: scale(0.99);
  }
`;

const ChatListWrapper = styled(ColumnWrapper)`
  max-width: 340px;
  max-height: 80vh;
  overflow-y: auto;
  @media (max-width: 700px) {
    max-height: 150px;
    max-width: 100%;
    width: 100%;
  }
`;

const FavClub = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 10px;
  top: -5px;
  border-radius: 60%;
  object-fit: cover;
`;

const textLimit = 20;

const ChatList = (props) => {
  const [searchText, setSearchText] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.chat?.user);

  useEffect(() => {
    const fetchSearchData = async (searchParam) => {
      if (!searchParam) {
        setSearchData(chatUserMock.map((i) => ({ key: i.id, value: i.name })));
      } else
        setSearchData(
          chatUserMock
            .filter((i) => i.name.includes(searchParam?.toString()))
            .map((i) => ({ key: i.id, value: i.name })),
        );
    };
    fetchSearchData(searchText);
  }, [searchText]);

  useEffect(() => {
    if (user) {
      setSelectedUser(user);
    } else {
      dispatch(setChatAction({ user: chatUserMock[0] }));
      setSelectedUser(chatUserMock[0]);
    }
    // eslint-disable-next-line
  }, []);

  const handleSelect = (v) => {
    dispatch(setChatAction({ user: v }));
    setSelectedUser(v);
  };

  return (
    <>
      <ChatListWrapper>
        <ColumnWrapper style={{ padding: '0 20px' }}>
          <SearchBar
            onSelect={() => {}}
            placeholder="Search users"
            searchVal={searchText}
            onChange={(v) => setSearchText(v)}
            data={searchData}
            icon={usersIcon}
          />
        </ColumnWrapper>
        <List>
          {chatUserMock.map((e, i) => (
            <ListItem
              style={selectedUser?.id === e.id ? { background: '#edfbf1' } : null}
              onClick={() => handleSelect(e)}
              key={e.id}
              isEven={i % 2 === 0}>
              <div style={{ position: 'relative' }}>
                <Avatar style={{ width: 45, height: 45 }} src={e.img} alt={e.name} />
                {e?.clubImg ? <FavClub src={e?.clubImg} alt="club-name" /> : null}
              </div>
              <ColumnWrapper>
                <Text14 bold>{e.name}</Text14>
                <Text14>
                  {e?.lastMessage?.length > textLimit
                    ? `${e?.lastMessage?.substr(0, textLimit)}...`
                    : e?.lastMessage}
                </Text14>
              </ColumnWrapper>
              <RowWrapper style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <img src={clockPost} alt="time" />
                <Text14 style={{ marginLeft: 5, color: '#B8B8B8' }}>{e?.lastMessageDate}</Text14>
              </RowWrapper>
            </ListItem>
          ))}
        </List>
      </ChatListWrapper>
    </>
  );
};

ChatList.propTypes = {};

export default ChatList;
