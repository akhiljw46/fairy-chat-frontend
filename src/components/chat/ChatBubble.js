import classes from './ChatBubble.module.css';

const ChatBubble = (props) => {
  const messageContent = props.text
    .split('\n')
    .map((para) => <p key={Math.random()}>{para}</p>);

  return (
    <li
      className={`${classes.bubble} ${
        props.isUser ? classes.user : classes.ai
      }`}
    >
      <div className={classes['out-para']}>{messageContent}</div>
    </li>
  );
};

export default ChatBubble;
