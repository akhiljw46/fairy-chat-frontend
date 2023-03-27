import classes from './SubmitButton.module.css';

const SubmitButton = (props) => {
  const buttonClickHandler = (event) => event.preventDefault();

  return (
    <button
      onClick={buttonClickHandler}
      className={classes.submit}
      type="submit"
    >
      &#62;
    </button>
  );
};

export default SubmitButton;
