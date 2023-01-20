import React from 'react';
import styled from 'styled-components';
import clockPost from '../../../../../../assets/icons/clockPost.svg';
import commentPost from '../../../../../../assets/icons/commentPost.svg';
import like from '../../../../../../assets/icons/like.svg';
import pinIcon from '../../../../../../assets/icons/pinLocation.svg';
import share from '../../../../../../assets/icons/share.svg';
import ButtonTextIcon from '../../../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { Avatar } from '../../results/sharedStyledComponents';

const Container = styled(ColumnWrapper)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 50px;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 400px;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  position: relative;
  overflow: hidden;
  margin: 25px 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  &:after {
    content: '';
    position: absolute;
    background-image: url(${(props) => props.img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out all;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.14);
  }
  &:hover:after {
    opacity: 0.95;
  }
  div {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    z-index: 4;
    span {
      width: 0;
      height: 0;
      border-top: 24px solid transparent;
      border-bottom: 24px solid transparent;
      border-left: 32px solid #fff;
    }
  }
`;

const BtnWrapper = styled(RowWrapper)`
  padding: 10px 20px;
  margin-top: 50px;
  border-top: 1px solid #f2f2f2;
  justify-content: space-between;
  align-items: center;
`;

const SinglePost = ({ post, onVideoClick }) => {
  const { clubName, location, when, splash, comments, views, avatar } = post;
  return (
    <Container>
      <RowWrapper>
        <RowWrapper>
          <Avatar
            src={
              avatar ||
              'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
            }
            alt="avatar"
          />
          <ColumnWrapper>
            <Text16 bold>{clubName}</Text16>
            <RowWrapper style={{ alignItems: 'center' }}>
              <img src={pinIcon} alt="location" />
              <Text14 style={{ marginLeft: 5, color: '#B8B8B8' }}>{location}</Text14>
            </RowWrapper>
          </ColumnWrapper>
        </RowWrapper>
        <RowWrapper style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <img src={clockPost} alt="location" />
          <Text14 style={{ marginLeft: 5, color: '#B8B8B8' }}>{when}</Text14>
        </RowWrapper>
      </RowWrapper>
      <StyledImage onClick={onVideoClick} img={splash}>
        <div>
          <span />
        </div>
      </StyledImage>
      <RowWrapper>
        <ColumnWrapper style={{ maxHeight: 240, overflowY: 'auto' }}>
          {comments?.map((comment, i) => (
            <RowWrapper key={`${comment.author} - ${i}`}>
              <Text14 bold style={{ marginRight: 5 }}>
                {comment.author}
              </Text14>
              <Text14>{comment.text}</Text14>
            </RowWrapper>
          ))}
        </ColumnWrapper>
        <Text14 style={{ whiteSpace: 'nowrap' }} bold>
          {views} Views
        </Text14>
      </RowWrapper>
      <BtnWrapper>
        <RowWrapper style={{ borderRight: '1px solid #f2f2f2', justifyContent: 'center' }}>
          <ButtonTextIcon
            style={{ alignItems: 'center' }}
            title="Like"
            icon={like}
            textColor="#000"
          />
        </RowWrapper>
        <RowWrapper style={{ borderRight: '1px solid #f2f2f2', justifyContent: 'center' }}>
          <ButtonTextIcon
            style={{ alignItems: 'center' }}
            title="Comment"
            icon={commentPost}
            textColor="#000"
          />
        </RowWrapper>
        <RowWrapper style={{ justifyContent: 'center' }}>
          <ButtonTextIcon
            style={{ alignItems: 'center' }}
            title="Share"
            icon={share}
            textColor="#000"
          />
        </RowWrapper>
      </BtnWrapper>
    </Container>
  );
};

SinglePost.propTypes = {};

export default SinglePost;
