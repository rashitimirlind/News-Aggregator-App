import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Content } from './content';
import { LoginPage } from './LoginPage';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [favorites, setFavorites] = useState([]); 
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false); 
  const [activeTab, setActiveTab] = useState("6");

  useEffect(() => {
    const local = localStorage.getItem('username');
    if (local) setLoggedIn(true);
  }, []);

  return (
    <div>
      {loggedIn ? (
        <>
          <Header 
            setLoggedIn={setLoggedIn} 
            searchTerm={searchTerm}       
            setSearchTerm={setSearchTerm} 
            favorites={favorites}         
            showFavoritesOnly={showFavoritesOnly}
            setShowFavoritesOnly={setShowFavoritesOnly}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Content 
            searchTerm={searchTerm} 
            favorites={favorites}         
            setFavorites={setFavorites}   
            showFavoritesOnly={showFavoritesOnly} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </>
      ) : (
        <LoginPage setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
