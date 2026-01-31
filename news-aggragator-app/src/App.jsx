// App.jsx
import Header from './header';
import './App.css';
import { Content } from './content';
import { LoginPage } from './LoginPage';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem('username')

    if (local) setLoggedIn (true)
  }, [])

  return (
    <div>
      {loggedIn ? (
        <>
          <Header setLoggedIn={setLoggedIn} />
          <Content />
        </>
      ) : (
        <LoginPage setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;


