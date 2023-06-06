import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Clown from './components/Clown';
import Prize from './components/Prize';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>

     <Header />
     <Router>
     <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
      }}>
     
      {/* 以下にルーティングの機能を追加します。 */}
          <Routes>
            <Route path="/" element={loggedIn ? <Clown /> : <LoginForm onLogin={handleLogin} />} />
            <Route path="/clown" element={<Clown />} />
            <Route path="/prize" element={<Prize />} />
          </Routes>
      </main>
      </Router>
      <Footer />
      </div>
    

    
  );
}

export default App;
