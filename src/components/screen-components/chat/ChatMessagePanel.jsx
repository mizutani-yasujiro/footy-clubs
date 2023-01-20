import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import attachment from '../../../assets/icons/attachment.svg';
import emoticon from '../../../assets/icons/emoticon.svg';
import send from '../../../assets/icons/send.svg';
import {
  ACCENT_THEME_COLOR,
  BORDER_COLOR,
  GREY_TEXT_COLOR,
  MAIN_THEME_COLOR,
} from '../../../constants/themeColors';
import Text12 from '../../common-components/text/text-12/Text12';
import Text14 from '../../common-components/text/text-14/Text14';
import Text18 from '../../common-components/text/text-18/Text18';
import UploadWrapper from '../../common-components/upload-wrapper/UploadWrapper';
import ColumnWrapper from '../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../common-components/wrappers/row-wrapper/RowWrapper';

const Header = styled(RowWrapper)`
  border-bottom: 1px solid ${BORDER_COLOR};
  padding: 16px 25px;
  align-items: center;
  max-height: 72px;
`;

const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 60%;
  background-color: ${(props) => (props.isActive ? MAIN_THEME_COLOR : GREY_TEXT_COLOR)};
  margin-right: 5px;
`;

const DotMenu = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 60%;
  background-color: ${GREY_TEXT_COLOR};
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 60%;
    background-color: ${GREY_TEXT_COLOR};
  }
  &:before {
    top: -8px;
    left: 0px;
  }
  &:after {
    top: 8px;
    left: 0px;
  }
`;

const MessageWrapper = styled(ColumnWrapper)`
  padding: 10px 25px;
  max-height: calc(100% - 122px);
  overflow-y: auto;
`;

const Message = styled(ColumnWrapper)`
  background-color: ${(props) => (props.isMy ? ACCENT_THEME_COLOR : GREY_TEXT_COLOR)};
  padding: 10px 20px;
  max-width: 360px;
  align-self: ${(props) => (props.isMy ? 'flex-end' : 'flex-start')};
  margin: 6px 0;
  border-radius: 11px;
`;

const MessageBox = styled(RowWrapper)`
  border-top: 1px solid ${BORDER_COLOR};
  align-items: center;
  max-height: 50px;
  justify-content: space-between;
`;

const MessageInput = styled.textarea`
  display: flex;
  resize: none;
  width: calc(100% - 160px);
  font-size: 12px;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  padding: 16px 25px;
  outline: none;
  border: none;
  background: none;
`;

const MessageButton = styled.img`
  margin-right: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: 0.9;
    transform: scale(0.9);
  }
`;

const messages = [
  {
    isMy: false,
    text:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain',
  },
  {
    isMy: false,
    text: 'Idea of denouncing pleasure and praising pain',
  },
  {
    isMy: true,
    text:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain',
  },
  {
    isMy: true,
    text: 'Idea of denouncing pleasure and praising pain',
  },
  {
    isMy: false,
    text:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain',
  },
  {
    isMy: false,
    text: 'Idea of denouncing pleasure and praising pain',
  },
  {
    isMy: true,
    text:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain',
  },
  {
    isMy: true,
    text: 'Idea of denouncing pleasure and praising pain',
  },
];

const ChatMessagePanel = () => {
  const user = useSelector((state) => state?.chat?.user);
  // eslint-disable-next-line
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [msg, setMsg] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMsg(`${msg} ${emojiObject?.emoji}`);
    setShowEmoji(false);
  };

  return (
    <ColumnWrapper>
      <Header>
        <ColumnWrapper>
          <Text18 bold>{user?.name}</Text18>
          <RowWrapper style={{ alignItems: 'center' }}>
            <Status isActive={user?.status} />
            <Text14>{user?.status ? 'Online' : 'Offline'}</Text14>
            <Text14 style={{ margin: '0 10px' }}>|</Text14>
            {!user?.status ? <Text14>Last seen {user?.lastMessageDate}</Text14> : null}
          </RowWrapper>
        </ColumnWrapper>
        <RowWrapper autoWidth style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <div style={{ cursor: 'pointer' }}>
            <DotMenu />
          </div>
        </RowWrapper>
      </Header>
      <MessageWrapper>
        {messages?.map((m, i) => (
          <ColumnWrapper style={{ margin: i !== 0 ? '0 0 10px' : '10px 0 0' }} key={i}>
            <Text12
              style={{
                padding: '0 10px',
                color: GREY_TEXT_COLOR,
                alignSelf: m?.isMy ? 'flex-end' : 'flex-start',
              }}>
              {m?.isMy ? 'Me' : user?.name}
              {m.isMy}
            </Text12>
            <Message isMy={m?.isMy}>
              <Text14 style={m?.isMy ? { color: '#FFFFFF' } : null}>{m?.text}</Text14>
            </Message>
          </ColumnWrapper>
        ))}
      </MessageWrapper>
      <MessageBox>
        <MessageInput
          onChange={({ target: { value } }) => setMsg(value)}
          value={msg}
          placeholder="Write a message"
        />
        <RowWrapper
          autoWidth
          style={{ alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
          {showEmoji ? (
            <div style={{ position: 'absolute', top: -300 }}>
              <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                skinTone={SKIN_TONE_MEDIUM_DARK}
                groupNames={{ smileys_people: 'PEOPLE' }}
              />
            </div>
          ) : null}
          <MessageButton onClick={() => setShowEmoji(!showEmoji)} src={emoticon} alt="emoticon" />
          <UploadWrapper onDrop={() => {}}>
            <MessageButton src={attachment} alt="attachment" />
          </UploadWrapper>
          <MessageButton src={send} alt="send" />
        </RowWrapper>
      </MessageBox>
    </ColumnWrapper>
  );
};

ChatMessagePanel.propTypes = {};

export default ChatMessagePanel;
