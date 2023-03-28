import { useContext } from 'react';
import MessageContext from '../utils/message-context';
import ChatBubble from './ChatBubble';
import classes from './ChatContainer.module.css';
import ChatMessages from './ChatMessages';

const ChatContainer = () => {
  const messagesCtx = useContext(MessageContext);
  const messages = messagesCtx.messages.map((message) => (
    <ChatBubble
      key={message.id}
      text={message.messageText}
      isUser={message.isUser}
    />
  ));

  return (
    <section className={classes.container}>
      <ChatMessages>{messages}</ChatMessages>
    </section>
  );
};

export default ChatContainer;
