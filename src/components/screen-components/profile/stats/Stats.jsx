import React from 'react';
import styled from 'styled-components';
import arrowTopIcon from '../../../../assets/icons/arrow-top.svg';
import awardIcon from '../../../../assets/icons/award.svg';
import ballIcon from '../../../../assets/icons/ball.svg';
import fireIcon from '../../../../assets/icons/fire.svg';
import footballerIcon from '../../../../assets/icons/footballer.svg';
import hourglassIcon from '../../../../assets/icons/hourglass.svg';
import lIcon from '../../../../assets/icons/L.svg';
import usersIcon from '../../../../assets/icons/people.svg';
import thumbDownIcon from '../../../../assets/icons/thumb-down.svg';
import thumbUpIcon from '../../../../assets/icons/thumb-up.svg';
import winIcon from '../../../../assets/icons/win.svg';
import { APP_BACKGROUND_COLOR } from '../../../../constants/themeColors';
import chatUserMock from '../../../../mocks/chatUserMock';
import Button from '../../../common-components/buttons/button/Button';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import Dropdown from '../../../common-components/dropdown/Dropdown';
import Text14 from '../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import NewAppCard from '../app-card-speaker/new-app-card/NewAppCard';
import teamMock from './teamMock';

const stats = [
  {
    name: 'Goals',
    icon: ballIcon,
    key: 'g',
  },
  {
    name: 'Man of the match',
    icon: footballerIcon,
    key: 'm',
  },
  {
    name: 'Best defender',
    icon: thumbUpIcon,
    key: 'bd',
  },
  {
    name: 'Worse player of the match',
    icon: thumbDownIcon,
    key: 'w',
  },
  {
    name: 'Top goal scorer award',
    icon: arrowTopIcon,
    key: 't',
  },
  {
    name: 'Best goal award',
    icon: fireIcon,
    key: 'bg',
  },
  {
    name: 'Lateness',
    icon: hourglassIcon,
    key: 'l',
  },
  {
    name: 'On the winning side',
    icon: winIcon,
    key: 'otw',
  },
  {
    name: 'On the losing side',
    icon: lIcon,
    key: 'otl',
  },
  {
    name: 'Assists',
    icon: usersIcon,
    key: 'as',
  },
  {
    name: 'Appearances',
    icon: awardIcon,
    key: 'ap',
  },
];

const Col = styled(BorderContainer)`
  min-width: ${(props) => (props.isStats ? '500px' : 'unset')};
  margin-right: ${(props) => (props.isStats ? '25px' : 'unset')};
  margin-left: ${(props) => (!props.isStats ? '25px' : 'unset')};
  align-self: ${(props) => (!props.isStats ? 'flex-start' : 'unset')};
  @media (max-width: 1054px) {
    margin: 0 0 20px;
  }
`;

const StatItem = styled(RowWrapper)`
  background: ${(props) => (props.isEven ? APP_BACKGROUND_COLOR : '#F3F3F3')};
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0;
`;

const List = styled(ColumnWrapper)`
  margin-top: 50px;
`;

const Wrapper = styled(RowWrapper)`
  @media (max-width: 1054px) {
    flex-wrap: wrap;
  }
`;

const Stats = () => {
  return (
    <Wrapper>
      <Col isStats>
        <ColumnWrapper>
          <Wrapper>
            <Dropdown data={teamMock} placeholder="Select data" />
            <Button style={{ marginLeft: 20, alignSelf: 'flex-start' }}>Search</Button>
          </Wrapper>
          <List>
            {stats.map((item, i) => (
              <StatItem isEven={i % 2 === 0} key={item.key}>
                <RowWrapper style={{ alignItems: 'center' }}>
                  <img src={item.icon} alt={item.name} />
                  <Text14 style={{ marginLeft: 10 }}>{item.name}</Text14>
                </RowWrapper>
                <Text14 bold>{teamMock[0].stats[`${item.key}`]}</Text14>
              </StatItem>
            ))}
          </List>
        </ColumnWrapper>
      </Col>
      <Col>
        <NewAppCard user={chatUserMock[0]} />
      </Col>
    </Wrapper>
  );
};

export default Stats;
