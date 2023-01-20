import React, { useState } from 'react';
import styled from 'styled-components';
import uploaderIcon from '../../../../../../assets/icons/uploaderIcon.svg';
import { MAIN_THEME_COLOR } from '../../../../../../constants/themeColors';
import ButtonTextIcon from '../../../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import Counter from '../../../../../common-components/counter/Counter';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import UploadWrapper from '../../../../../common-components/upload-wrapper/UploadWrapper';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import SinglePost from './SinglePost';
import VideoPopup from './VideoPopup';

const Container = styled.div`
  display: grid;
  padding-right: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: dense;
  grid-auto-rows: 300px;
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

const Space = styled.div`
  margin: 20px 0 10px;
  @media (max-width: 1056px) {
    display: flex;
    justify-content: center;
  }
`;

const mock = [
  {
    likes: '600',
    shares: '200',
    views: '70k',
    clubName: 'Tuesday Night FC',
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
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '30k',
    clubName: 'Geek Football',
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
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '15k',
    clubName: 'Monkeys',
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
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '20k',
    clubName: 'Brixton Ballers',
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
      'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '40k',
    clubName: 'Tuesday Guys',
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
      'https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '40k',
    clubName: 'Tuesday Guys',
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
      'https://images.unsplash.com/photo-1516283250450-174387a1af6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '40k',
    clubName: 'Tuesday Guys',
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
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '40k',
    clubName: 'Tuesday Guys',
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
      'https://images.unsplash.com/photo-1524015368236-bbf6f72545b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '40k',
    clubName: 'Tuesday Guys',
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
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    likes: '600',
    shares: '200',
    views: '40k',
    clubName: 'Tuesday Guys',
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
      'https://images.unsplash.com/photo-1583675829372-0758ac4013cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80',
  },
];

const SINGLE_VIEW = 'single';
const MULTI_VIEW = 'multi';

const PostsGallery = ({ isMyProfile }) => {
  const [posts] = useState(mock);
  const [selectedView, setSelectedView] = useState(SINGLE_VIEW);
  const [selectedPost, setSelectedPost] = useState(null);
  const [img, setImg] = useState(null);
  const [hidden, sethidden] = useState(true);

  const togglePost = (post) => {
    setSelectedPost(post);
    sethidden(false);
  };

  return (
    <ColumnWrapper>
      <Text24>Next Game In</Text24>
      <Space>
        <Counter />
      </Space>
      {isMyProfile ? (
        <RowWrapper
          style={{ alignItems: 'center', margin: '30px 0 20px', justifyContent: 'space-between' }}>
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
        </RowWrapper>
      ) : null}
      <RowWrapper style={{ alignItems: 'center', justifyContent: 'flex-end', marginBottom: 20 }}>
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
      {selectedView === SINGLE_VIEW ? (
        <ColumnWrapper style={{ maxHeight: 600, overflowY: 'auto', padding: '0 20px' }}>
          {posts.map((item) => (
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
  );
};

PostsGallery.propTypes = {};

export default PostsGallery;
