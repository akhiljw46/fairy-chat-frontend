import { useContext, useEffect, useRef } from 'react';
import MessageContext from '../utils/message-context';
import ChatBubble from './ChatBubble';
import classes from './ChatContainer.module.css';
import ChatMessages from './ChatMessages';

const ChatContainer = () => {
  const containerRef = useRef(null);

  // containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });

  const messagesCtx = useContext(MessageContext);
  const messages = messagesCtx.messages.map((message) => (
    <ChatBubble
      key={message.id}
      text={message.messageText}
      isUser={message.isUser}
    />
  ));

  useEffect(() => {
    containerRef.current.scroll({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <section ref={containerRef} className={classes.container}>
      <ChatMessages>{messages}</ChatMessages>
    </section>
  );
};

export default ChatContainer;
