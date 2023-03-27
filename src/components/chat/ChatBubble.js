import classes from './ChatBubble.module.css';

const ChatBubble = (props) => {
  return (
    <li
      className={`${classes.bubble} ${
        props.isUser ? classes.user : classes.ai
      }`}
    >
      <p>{props.text}</p>
    </li>
  );
};

export default ChatBubble;
