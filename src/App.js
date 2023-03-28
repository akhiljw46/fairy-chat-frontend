import ChatContainer from './components/chat/ChatContainer';
import InputContainer from './components/input/InputContainer';
import Header from './components/layout/Header';

import classes from './App.module.css';
import Footer from './components/layout/Footer';
import MessageContext from './components/utils/message-context';

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

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <MessageContext.Provider value={DummyMessages}>
        <ChatContainer />
        <InputContainer />
      </MessageContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
