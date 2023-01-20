import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import clockPost from '../../../../../../assets/icons/clockPost.svg';
import commentPost from '../../../../../../assets/icons/commentPost.svg';
import like from '../../../../../../assets/icons/like.svg';
import pinIcon from '../../../../../../assets/icons/pinLocation.svg';
import share from '../../../../../../assets/icons/share.svg';
import videoMock from '../../../../../../assets/video/football.mp4';
import { APP_BACKGROUND_COLOR } from '../../../../../../constants/themeColors';
import ButtonTextIcon from '../../../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import Cross from '../../../../../common-components/cross/Cross';
import Portal from '../../../../../common-components/portal/Portal';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { Avatar } from '../../results/sharedStyledComponents';

const Overlay = styled(ColumnWrapper)`
  background: rgba(0, 0, 0, 0.39);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
`;

const Container = styled(RowWrapper)`
  min-height: 600px;
  justify-content: space-between;
  max-width: 1400px;
  background: ${APP_BACKGROUND_COLOR};
  @media (max-width: 968px) {
    flex-wrap: wrap;
  }
`;

const Col = styled(ColumnWrapper)`
  min-height: ${(props) => (props.video ? '200px' : 'unset')};
  max-width: ${(props) => (!props.video ? '500px' : 'unset')};
  @media (max-width: 968px) {
    max-width: unset;
  }
`;

const Wrapper = styled(ColumnWrapper)`
  padding: 25px;
`;

const DescWrapper = styled(ColumnWrapper)`
  padding: 10px 5px 20px;
  border-bottom: 1px solid #f2f2f2;
  justify-content: center;
  align-items: center;
`;

const BtnWrapper = styled(RowWrapper)`
  padding: 10px 20px;
  margin-top: 50px;
  border-top: 1px solid #f2f2f2;
  justify-content: space-between;
  align-items: center;
`;

const VideoPopup = ({ closePopup, post }) => {
  const popupRef = useRef();
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && ref.current === event.target) {
          closePopup();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(popupRef);
  return (
    <>
      <Portal>
        <Overlay ref={popupRef}>
          <Cross onClick={closePopup} />
          <Container>
            <Col video>
              <ReactPlayer
                width="100%"
                height="100%"
                light={post?.splash}
                playing={true}
                playsinline
                controls
                url={videoMock}></ReactPlayer>
            </Col>
            <Col>
              <Wrapper>
                <RowWrapper>
                  <RowWrapper>
                    <Avatar
                      src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                      alt="avatar"
                    />
                    <ColumnWrapper>
                      <Text16 bold>{post?.clubName}</Text16>
                      <RowWrapper style={{ alignItems: 'center' }}>
                        <img src={pinIcon} alt="location" />
                        <Text14 style={{ marginLeft: 5, color: '#B8B8B8' }}>
                          {post?.location}
                        </Text14>
                      </RowWrapper>
                    </ColumnWrapper>
                    <RowWrapper style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                      <img src={clockPost} alt="time" />
                      <Text14 style={{ marginLeft: 5, color: '#B8B8B8' }}>{post?.when}</Text14>
                    </RowWrapper>
                  </RowWrapper>
                </RowWrapper>
                <DescWrapper>
                  <Text14 style={{ marginTop: 10 }}>{post?.description}</Text14>
                </DescWrapper>
                <RowWrapper
                  style={{ marginTop: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Text14 style={{ marginLeft: 10 }} bold>
                    {post?.shares} Shares
                  </Text14>
                  <Text14 style={{ marginLeft: 10 }} bold>
                    {post?.likes} Likes
                  </Text14>
                  <Text14 style={{ marginLeft: 10 }} bold>
                    {post?.views} Views
                  </Text14>
                </RowWrapper>
                <Text16 style={{ marginTop: 30 }} bold>
                  Comments:
                </Text16>
                <ColumnWrapper style={{ maxHeight: 300, overflowY: 'auto' }}>
                  {post?.comments?.map((comment, i) => (
                    <RowWrapper key={`${comment.author} - ${i}`}>
                      <Text14 bold style={{ marginRight: 5 }}>
                        {comment.author}
                      </Text14>
                      <Text14>{comment.text}</Text14>
                    </RowWrapper>
                  ))}
                </ColumnWrapper>
              </Wrapper>
              <ColumnWrapper style={{ height: '100%', justifyContent: 'flex-end' }}>
                <BtnWrapper>
                  <RowWrapper
                    style={{ borderRight: '1px solid #f2f2f2', justifyContent: 'center' }}>
                    <ButtonTextIcon
                      style={{ alignItems: 'center' }}
                      title="Like"
                      icon={like}
                      textColor="#000"
                    />
                  </RowWrapper>
                  <RowWrapper
                    style={{ borderRight: '1px solid #f2f2f2', justifyContent: 'center' }}>
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
              </ColumnWrapper>
            </Col>
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

VideoPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default VideoPopup;
