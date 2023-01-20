import React from 'react';
import Menu from '../../components/common-components/menu/Menu';
import AppWrapper from '../../components/common-components/wrappers/app-wrapper/AppWrapper';
import ChatForm from '../../components/screen-components/chat/ChatForm';

const Chat = () => {
  return (
    <AppWrapper>
      <Menu />
      <ChatForm />
    </AppWrapper>
  );
};

Chat.propTypes = {};

export default Chat;
