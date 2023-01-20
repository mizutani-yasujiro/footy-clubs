import React from 'react';
import Avatar from '../../screen-components/shared/Avatar';
import Number from '../../screen-components/shared/Number';
import Button from '../buttons/button/Button';
import Text14 from '../text/text-14/Text14';
import Text16 from '../text/text-16/Text16';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import ItemWrapper from './ItemWrapper';

const Followers = ({ users }) => {
  const followUser = () => {};

  return (
    <>
      {users?.map((item, i) => (
        <ItemWrapper dark={i % 2 === 0} key={`${item?.name}${item?.number}${i}`}>
          <RowWrapper style={{ alignItems: 'center' }} autoWidth>
            <Avatar src={item.img} alt="avatar" small />
            <Text14 style={{ width: 140 }}>{item?.name}</Text14>
            <RowWrapper autoWidth>
              <Number>
                <Text16 bold style={{ color: 'white' }}>
                  {item?.number}
                </Text16>
              </Number>
              <img width="24" src={item?.natFlag} style={{ marginLeft: 5 }} alt="nationality" />
            </RowWrapper>
          </RowWrapper>
          <RowWrapper autoWidth>
            {item?.iFollowUser ? null : (
              <Button
                small
                onClick={followUser}
                style={{ alignSelf: 'flex-end', padding: '6px 20px', fontSize: 13 }}>
                Follow
              </Button>
            )}
          </RowWrapper>
        </ItemWrapper>
      ))}
    </>
  );
};

export default Followers;
