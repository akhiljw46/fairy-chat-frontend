import ChatContainer from './components/chat/ChatContainer';
import InputContainer from './components/input/InputContainer';
import Header from './components/layout/Header';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <ChatContainer />
      <InputContainer />
    </div>
  );
}

export default App;
