import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR, MAIN_THEME_COLOR } from '../../../constants/themeColors';
import playerMock from '../../../mocks/playerMock';
import { setVotingAction } from '../../../redux/actions/voting';
import Avatar from '../../screen-components/shared/Avatar';
import Number from '../../screen-components/shared/Number';
import Button from '../buttons/button/Button';
import Overlay from '../overlay/Overlay';
import Portal from '../portal/Portal';
import Text14 from '../text/text-14/Text14';
import Text16 from '../text/text-16/Text16';
import Text24 from '../text/text-24/Text24';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';

const Container = styled(ColumnWrapper)`
  max-width: 600px;
  min-height: 300px;
  background: #ffffff;
  padding: 50px;
`;

const ItemWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${(props) => (props.dark ? APP_BACKGROUND_COLOR : '#FFFFFF')};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  border-color: ${(props) => (props.isSelected ? MAIN_THEME_COLOR : 'transparent')};
  &:hover {
    transform: scale(0.98);
  }
`;

const titles = [
  'Who was your man of the match?',
  'Who was your best defender?',
  'Who was your worse player of the match?',
  'Who scored the best goal?',
];

const VotingSurvey = ({ closePopup }) => {
  const [players] = useState(playerMock);
  const [step, setStep] = useState(1);
  const [answers, setAnwsers] = useState([]);
  const [selectedAnswer, setSelectedAnwser] = useState(null);
  const dispatch = useDispatch();

  const nextSurvery = () => {
    if (selectedAnswer) {
      if (step === titles.length) {
        dispatch(setVotingAction({ isVoting: false }));
        closePopup();
      } else {
        setAnwsers([...answers, selectedAnswer]);
        setSelectedAnwser(null);
        setStep(step + 1);
      }
    }
  };

  return (
    <>
      <Portal>
        <Overlay>
          <Container>
            <h1 style={{ fontWeight: '600', marginBottom: 15 }}>
              {step} of {titles.length}
            </h1>
            <Text24 style={{ marginBottom: 30 }}>{titles[step - 1]}</Text24>
            {players?.map((item, i) => (
              <ItemWrapper
                isSelected={selectedAnswer?.id === item?.id}
                onClick={() => setSelectedAnwser(item)}
                dark={i % 2 === 0}
                key={`${item.name}${item.number}${i}`}>
                <RowWrapper style={{ alignItems: 'center' }} autoWidth>
                  <Text16 bold style={{ marginRight: 10 }}>
                    {i + 1}
                  </Text16>
                  <Avatar src={item.img} alt="avatar" small />
                  <Text14 style={{ width: 140 }}>{item.name}</Text14>
                  <RowWrapper autoWidth>
                    <Number>
                      <Text16 bold style={{ color: 'white' }}>
                        {item.number}
                      </Text16>
                    </Number>
                    <img
                      width="24"
                      src={item.natFlag}
                      style={{ marginLeft: 5 }}
                      alt="nationality"
                    />
                  </RowWrapper>
                </RowWrapper>
              </ItemWrapper>
            ))}
            <Button
              onClick={nextSurvery}
              style={{ alignSelf: 'flex-end', marginTop: 30 }}
              disabled={!selectedAnswer}>
              Confirm
            </Button>
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

VotingSurvey.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default VotingSurvey;
