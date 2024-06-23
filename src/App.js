import React from 'react';
import './App.css';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Header />
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
      <Footer />
    </div>
  );
}

export default App;
