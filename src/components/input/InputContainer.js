import { useContext, useRef, useState } from 'react';

import MessageContext from '../utils/message-context';
import InputText from './InputText';
import SubmitButton from './SubmitButton';

import classes from './InputContainer.module.css';

const InputContainer = () => {
  const inputRef = useRef(null);
  const messageCtx = useContext(MessageContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessage = async (message) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://fairy-chat.cyclic.app/v1/message/',
        {
          method: 'POST',
          body: JSON.stringify({ message }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {}
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const messageText = inputRef.current.value;

    messageCtx.addMessage({
      id: Date.now(),
      isUser: true,
      messageText,
    });
    inputRef.current.value = '';
    console.log(await fetchMessage(messageText));
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <InputText ref={inputRef} />
      <SubmitButton />
    </form>
  );
};

export default InputContainer;
