import ChatBubble from './ChatBubble';
import classes from './ChatContainer.module.css';
import ChatMessages from './ChatMessages';

const ChatContainer = () => {
  return (
    <section className={classes.container}>
      <ChatMessages>
        <ChatBubble text="Hello" isUser={true} />
        <ChatBubble text="How are you" isUser={false} />
        <ChatBubble text="I am fine, thank you" isUser={true} />
      </ChatMessages>
    </section>
  );
};

export default ChatContainer;
