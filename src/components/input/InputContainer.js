import { useContext, useRef } from 'react';

import MessageContext from '../utils/message-context';
import InputText from './InputText';
import SubmitButton from './SubmitButton';

import classes from './InputContainer.module.css';

const InputContainer = () => {
  const inputRef = useRef(null);
  const messageCtx = useContext(MessageContext);

  const submitHandler = (event) => {
    event.preventDefault();

    messageCtx.addMessage({
      id: Date.now(),
      isUser: true,
      messageText: inputRef.current.value,
    });
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <InputText ref={inputRef} />
      <SubmitButton />
    </form>
  );
};

export default InputContainer;
