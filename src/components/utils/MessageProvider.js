import { useState } from 'react';
import MessageContext from './message-context';

const MessageProvider = (props) => {
  const [messages, setMessages] = useState([]);

  const addMessageHandler = (message) =>
    setMessages((prevMessages) => [...prevMessages, message]);

  const messageContext = {
    messages,
    addMessage: addMessageHandler,
  };

  return (
    <MessageContext.Provider value={messageContext}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
