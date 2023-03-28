import ChatBubble from './ChatBubble';
import classes from './ChatContainer.module.css';
import ChatMessages from './ChatMessages';

const DummyMessages = [
  {
    id: 'm1',
    isUser: true,
    messageText: 'Hello',
  },
  {
    id: 'm2',
    isUser: false,
    messageText: 'Yes, how can I help you?',
  },
  {
    id: 'm3',
    isUser: true,
    messageText: 'Can you tell me who is Akhil?',
  },
  {
    id: 'm4',
    isUser: false,
    messageText: 'Akhil is a boy who lives in his own world!',
  },
];

const ChatContainer = () => {
  const messages = DummyMessages.map((message) => (
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
