import PropTypes from 'prop-types';
import React from 'react';
import usersMock from '../../../../../../mocks/usersMock';
import Button from '../../../../../common-components/buttons/button/Button';
import TextArea from '../../../../../common-components/input/TextArea';
import UserSelect from '../../../../../common-components/select/UserSelect';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import {
  Avatar,
  DropDownWrapper,
  Header,
  InfoWrapper,
  List,
  ScoreWrapper,
  Table,
  TableRowWrapper,
  TeamText,
} from '../sharedStyledComponents';

/* just a mock for all dropdowns */
const users = usersMock.map((item, i) => ({
  key: i,
  value: item.name,
  img: item.img,
}));

const EditTable = ({ matchInfo, onPublish }) => {
  return (
    <>
      <Table autoWidth>
        <Header>
          <TeamText bold>{matchInfo.teamA.name}</TeamText>
          <Text24 style={{ fontSize: '2rem', fontWeight: '900' }}>VS</Text24>
          <TeamText bold>{matchInfo.teamB.name}</TeamText>
        </Header>
        <TableRowWrapper>
          <ColumnWrapper>
            <List>
              <li>
                <Text14>Captions</Text14>
                <RowWrapper autoWidth>
                  {matchInfo.captions.map((caption) => (
                    <Avatar src={caption.image} alt={caption.name} key={caption.name} />
                  ))}
                </RowWrapper>
              </li>
              <li>
                <Text14>Man of the match</Text14>
                <Text14>{matchInfo.bestMan}</Text14>
              </li>
              <li>
                <Text14>Best defender</Text14>
                <Text14>{matchInfo.def}</Text14>
              </li>
              <li>
                <Text14>Worse player of the match</Text14>
                <Text14>{matchInfo.bgs}</Text14>
              </li>
              <li>
                <Text14>Best goal scored</Text14>
                <Text14>{matchInfo.worseMan}</Text14>
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
                <DropDownWrapper>
                  <UserSelect data={users} />
                </DropDownWrapper>
              </li>
              <li>
                <Text14>Last player to arrive</Text14>
                <DropDownWrapper>
                  <UserSelect multiple={false} data={users} />
                </DropDownWrapper>
              </li>
              <li>
                <Text14>Top goal scrorer</Text14>
                <DropDownWrapper>
                  <UserSelect multiple={false} data={users} />
                </DropDownWrapper>
              </li>
              <li>
                <Text14>Assists</Text14>
                <DropDownWrapper>
                  <UserSelect data={users} />
                </DropDownWrapper>
              </li>
            </List>
          </ColumnWrapper>
          <InfoWrapper>
            <TextArea placeholder="Summary" />
            <Button onClick={onPublish} style={{ alignSelf: 'flex-end', marginTop: 20 }}>
              Publish information
            </Button>
          </InfoWrapper>
        </TableRowWrapper>
      </Table>
    </>
  );
};

EditTable.propTypes = {
  matchInfo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.string),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ).isRequired,
  onPublish: PropTypes.func.isRequired,
};

export default EditTable;
