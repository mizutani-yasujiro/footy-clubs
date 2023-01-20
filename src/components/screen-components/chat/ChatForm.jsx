import React from 'react';
import styled from 'styled-components';
import BorderContainer from '../../common-components/containers/border-container/BorderContainer';
import RowWrapper from '../../common-components/wrappers/row-wrapper/RowWrapper';
import ChatDetails from './ChatDetails';
import ChatList from './ChatList';
import ChatMessagePanel from './ChatMessagePanel';

const ChatListWrapper = styled(BorderContainer)`
  max-width: 340px;
  padding: 25px 0 0;
  margin-right: 25px;
  @media (max-width: 700px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const DetailsWrapper = styled(BorderContainer)`
  max-width: 300px;
  padding: 25px;
  margin-left: 25px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MessageWrapper = styled(BorderContainer)`
  padding: 0;
`;

const Wrapper = styled(RowWrapper)`
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const ChatForm = () => {
  return (
    <Wrapper>
      <ChatListWrapper>
        <ChatList />
      </ChatListWrapper>
      <MessageWrapper>
        <ChatMessagePanel />
      </MessageWrapper>
      <DetailsWrapper>
        <ChatDetails />
      </DetailsWrapper>
    </Wrapper>
  );
};

ChatForm.propTypes = {};

export default ChatForm;
