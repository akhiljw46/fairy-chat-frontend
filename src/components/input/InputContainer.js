import InputText from './InputText';
import SubmitButton from './SubmitButton';

import classes from './InputContainer.module.css';

const InputContainer = (props) => {
  return (
    <form className={classes.container}>
      <InputText />
      <SubmitButton />
    </form>
  );
};

export default InputContainer;
