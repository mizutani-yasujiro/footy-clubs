import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import usersMock from '../../../../../../../mocks/usersMock';
import Text14 from '../../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../../common-components/text/text-16/Text16';
import Text18 from '../../../../../../common-components/text/text-18/Text18';
import ColumnWrapper from '../../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Avatar from '../../../../../shared/Avatar';
import {
  Avatar as Av,
  List,
  ScoreWrapper,
  ShadowedContainer,
  TableRowWrapper,
} from '../../sharedStyledComponents';
import GameFinish from './GameFinish';
import PlayGround from './PlayGround';

const teamOne = usersMock.slice(0, 6).map((item, i) => {
  return {
    ...item,
    name: `${item.name} ${i}`,
  };
});

const teamTwo = usersMock.slice(6, 12).map((item, i) => {
  return {
    ...item,
    name: `${i} ${item.name}`,
  };
});

const teamMateStyle = {
  justifyContent: 'space-between',
  marginBottom: 10,
  alignItems: 'center',
};

const LineWrapper = styled(ColumnWrapper)`
  padding: 50px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  &:before {
    content: '${(props) => (props.name ? props.name : 'Player')}';
    position: absolute;
    top: -36px;
    font-size: 12px;
    left: 0;
    padding: 5px 10px;
    background: #e2e2e2;
    border-radius: 2px; 
    white-space: nowrap;
    opacity: 0;
    transform: scale(0);
    transition: .2s ease-in-out all;
  }
  &:after {
    content: '';
    position: absolute;
    top: -12px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #e2e2e2;
    opacity: 0;
    transform: scale(0);
    transition: .2s ease-in-out all;
  }
  &:hover:before, &:hover:after {
    opacity: 1;
    transform: scale(1);
  }
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 60%;
  border: 2px solid ${(props) => (props.color ? props.color : '#56ABFF')};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.21);
  margin-right: 10px;
  background: #fff;
`;

const LineUpStats = ({ matchInfo }) => {
  const location = useLocation();

  return (
    <TableRowWrapper>
      <LineWrapper style={{ maxWidth: 500 }}>
        <Text18 bold>Line-up</Text18>
        <RowWrapper
          style={{ margin: '10px 0 6px', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Circle />
          <Text16>Blue Team</Text16>
        </RowWrapper>
        <PlayGround />
        <RowWrapper
          style={{ margin: '10px 0 6px', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Circle color="#FF5656" />
          <Text16>Red Team</Text16>
        </RowWrapper>
        <ShadowedContainer>
          <RowWrapper style={{ justifyContent: 'center', marginBottom: 20 }}>
            <Text18 style={{ marginRight: 10 }}>Blue Team</Text18>
            <Text18 style={{ marginLeft: 10 }}>Red Team</Text18>
          </RowWrapper>
          <RowWrapper>
            <ColumnWrapper>
              {teamOne.map((item) => (
                <RowWrapper style={teamMateStyle} key={item.name}>
                  <Text14>{item.name}</Text14>
                  <Avatar
                    style={{ marginRight: 10 }}
                    src={item.img}
                    alt="avatar"
                    small
                    border="2px solid #2398FF"
                  />
                </RowWrapper>
              ))}
            </ColumnWrapper>
            <ColumnWrapper>
              {teamTwo.map((item) => (
                <RowWrapper style={teamMateStyle} key={item.name}>
                  <Avatar
                    style={{ marginLeft: 10 }}
                    src={item.img}
                    alt="avatar"
                    small
                    border="2px solid #FF233B"
                  />
                  <Text14>{item.name}</Text14>
                </RowWrapper>
              ))}
            </ColumnWrapper>
          </RowWrapper>
        </ShadowedContainer>
      </LineWrapper>
      {location.state && location.state.renderStats ? (
        <GameFinish />
      ) : (
        <ColumnWrapper>
          <List>
            <Text18 bold>Stats</Text18>
            <li>
              <Text14>Captions</Text14>
              <RowWrapper autoWidth>
                {matchInfo.captions.map((caption) => (
                  <ImgWrapper name={caption.name} key={caption.name}>
                    <Av src={caption.image} alt={caption.name} />
                  </ImgWrapper>
                ))}
              </RowWrapper>
            </li>
            <li>
              <Text14>Man of the match</Text14>
              <ImgWrapper>
                <Av src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
              </ImgWrapper>
            </li>
            <li>
              <Text14>Best defender</Text14>
              <ImgWrapper>
                <Av src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
              </ImgWrapper>
            </li>
            <li>
              <Text14>Worse player of the match</Text14>
              <ImgWrapper>
                <Av src={matchInfo.captions[1].image} alt={matchInfo.captions[1].name} />
              </ImgWrapper>
            </li>
            <li>
              <Text14>The final score</Text14>
              <RowWrapper
                style={{ justifyContent: 'space-between', alignItems: 'center', maxWidth: 120 }}>
                <ScoreWrapper isWin={matchInfo.teamA.score > matchInfo.teamB.score}>
                  <Text14>{matchInfo.teamA.score}</Text14>
                </ScoreWrapper>
                <Text14>:</Text14>
                <ScoreWrapper isWin={matchInfo.teamB.score > matchInfo.teamA.score}>
                  <Text14>{matchInfo.teamB.score}</Text14>
                </ScoreWrapper>
              </RowWrapper>
            </li>
            <li>
              <Text14>Goal scorers</Text14>
              <RowWrapper autoWidth>
                {matchInfo.captions.map((caption) => (
                  <ImgWrapper key={caption.name}>
                    <Av src={caption.image} alt={caption.name} />
                  </ImgWrapper>
                ))}
              </RowWrapper>
            </li>
            <li>
              <Text14>Best goal scored</Text14>
              <ImgWrapper>
                <Av src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
              </ImgWrapper>
            </li>
            <li>
              <Text14>Last player to arrive</Text14>
              <ImgWrapper>
                <Av src={matchInfo.captions[1].image} alt={matchInfo.captions[1].name} />
              </ImgWrapper>
            </li>
            <li>
              <Text14>Top goal scrorer</Text14>
              <ImgWrapper>
                <Av src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
              </ImgWrapper>
            </li>
            <li>
              <Text14>Assists</Text14>
              <RowWrapper autoWidth>
                {matchInfo.captions.map((caption) => (
                  <ImgWrapper key={caption.name}>
                    <Av src={caption.image} alt={caption.name} />
                  </ImgWrapper>
                ))}
              </RowWrapper>
            </li>
          </List>
        </ColumnWrapper>
      )}
    </TableRowWrapper>
  );
};

LineUpStats.propTypes = {
  matchInfo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.string),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ).isRequired,
};

export default LineUpStats;
