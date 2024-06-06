import React, { useState } from 'react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Chat from './Chat';


const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'signin' && <SignIn setPage={setPage} />}
      {page === 'signup' && <SignUp setPage={setPage} />}
      {page === 'chat' && <Chat setPage={setPage} />}
    </div>
  );
};

export default App;