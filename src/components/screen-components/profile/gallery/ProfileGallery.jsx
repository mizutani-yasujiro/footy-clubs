import React, { useState } from 'react';
import styled from 'styled-components';
import uploaderIcon from '../../../../assets/icons/uploaderIcon.svg';
import { MAIN_THEME_COLOR } from '../../../../constants/themeColors';
import ButtonTextIcon from '../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import Text14 from '../../../common-components/text/text-14/Text14';
import UploadWrapper from '../../../common-components/upload-wrapper/UploadWrapper';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import SinglePost from '../../club/profile/club-info/posts-gallery/SinglePost';
import VideoPopup from '../../club/profile/club-info/posts-gallery/VideoPopup';

const Container = styled.div`
  display: grid;
  padding-right: 20px;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 130px);
  grid-gap: 10px;
  grid-auto-flow: dense;
  grid-auto-rows: 130px;
  max-height: 500px;
  overflow-y: auto;
  @media (max-width: 800px) {
    margin: 20px 0;
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  position: relative;
  overflow: hidden;
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
    transform: scale(1.05);
    opacity: 0.8;
  }
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    z-index: 4;
    span {
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 16px solid #fff;
      margin-right: 5px;
    }
    p {
      font-size: 16px;
      color: #fff;
      font-weight: 600;
    }
  }
`;

const SinglePostBtn = styled.div`
  width: 28px;
  height: 28px;
  background: ${(props) => (props.selected ? MAIN_THEME_COLOR : '#B8EBD3')};
  transition: 0.2s ease-in-out all;
  cursor: pointer;
`;

const MultiPostBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10px;
  cursor: pointer;
  span {
    width: 13px;
    height: 13px;
    margin: 1px;
    background: ${(props) => (props.selected ? MAIN_THEME_COLOR : '#B8EBD3')};
    transition: 0.2s ease-in-out all;
  }
`;

const mock = [
  {
    likes: '600',
    shares: '200',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    views: '70k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '20k',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    clubName: 'Mark J Whittaker',
    location: 'London',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    when: '12 hours ago',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shares: '200',
    views: '40k',
    clubName: 'Mark J Whittaker',
    location: 'London',
    when: '12 hours ago',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur ea placeat aut fugit sed voluptatem, quod possimus tempore aliquid reprehenderit',
    comments: [
      {
        author: 'John Williams',
        text: 'what a game of football we had in the square.',
      },
      {
        author: 'Jonny Peelo ',
        text: 'it was a night to remember, even tho we lost.',
      },
      {
        author: 'David Jones',
        text: 'the best team did not win.',
      },
    ],
    splash:
      'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];

const SINGLE_VIEW = 'single';
const MULTI_VIEW = 'multi';

const ProfileGallery = ({ isMyProfile }) => {
  const [posts] = useState([]);
  const [selectedView, setSelectedView] = useState(SINGLE_VIEW);
  const [selectedPost, setSelectedPost] = useState(null);
  const [hidden, sethidden] = useState(true);
  const [img, setImg] = useState(null);

  const togglePost = (post) => {
    setSelectedPost(post);
    sethidden(false);
  };

  return (
    <BorderContainer>
      <ColumnWrapper>
        <RowWrapper
          style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          {isMyProfile ? (
            <UploadWrapper
              accept="video/mp4,video/x-m4v,video/*"
              onDrop={(f) => {
                setImg({ link: URL.createObjectURL(f[0]), name: f[0]?.name });
              }}>
              <RowWrapper style={{ alignItems: 'center', paddingLeft: 25, minWidth: 320 }}>
                <ButtonTextIcon
                  title="Upload video"
                  textColor={MAIN_THEME_COLOR}
                  onClick={() => {}}
                  icon={uploaderIcon}
                />
                <Text14 style={{ color: '#BCBCBC' }}>{img?.name || '(Drag and drop)'}</Text14>
              </RowWrapper>
            </UploadWrapper>
          ) : null}
          <RowWrapper style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <SinglePostBtn
              selected={selectedView === SINGLE_VIEW}
              onClick={() => setSelectedView(SINGLE_VIEW)}
            />
            <MultiPostBtn
              selected={selectedView === MULTI_VIEW}
              onClick={() => setSelectedView(MULTI_VIEW)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </MultiPostBtn>
          </RowWrapper>
        </RowWrapper>
        {selectedView === SINGLE_VIEW ? (
          <ColumnWrapper style={{ maxHeight: 600, overflowY: 'auto', padding: '0 20px', textAlign: "center" }}>
            {posts.length == 0 ?
              <p>There are no posts. Please upload your first post.</p>
              :
              posts.map((item) => (
                <SinglePost
                  onVideoClick={() => togglePost(item)}
                  post={item}
                  key={item.splash}></SinglePost>
              ))}
          </ColumnWrapper>
        ) : (
          <RowWrapper>
            <Container size={200}>
              {posts.map((item) => (
                <StyledImage onClick={() => togglePost(item)} key={item.splash} img={item.splash}>
                  <div>
                    <span />
                    <p>{item.views}</p>
                  </div>
                </StyledImage>
              ))}
            </Container>
          </RowWrapper>
        )}
        {hidden ? null : <VideoPopup post={selectedPost} closePopup={() => sethidden(true)} />}
      </ColumnWrapper>
    </BorderContainer>
  );
};

ProfileGallery.propTypes = {};

export default ProfileGallery;
