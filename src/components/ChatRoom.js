import React, { useState, useEffect, useRef } from "react";
import { firestore, auth } from "../firebaseConfig";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { Box, Avatar, Typography, TextField, Button, Container, Tooltip } from '@mui/material';

const ChatRoom = () => {
  const chatContainerRef = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'));

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => doc.data());
      setMessages(data);
      scrollToBottom();
    });

    return unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    const displayName = auth.currentUser.displayName; // Assuming displayName is set in Firebase Auth

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName
    });

    setFormValue('');
    scrollToBottom();
  };

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  return (
    <Container maxWidth="sm">
      <Box
        ref={chatContainerRef}
        sx={{
          height: '70vh',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          marginBottom: '20px',
        }}
      >
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
        {/* <span ref={dummy}></span> */}
      </Box>

      <form onSubmit={sendMessage} style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <TextField
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message"
          variant="outlined"
          fullWidth
          sx={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary" disabled={!formValue}>
          Send
        </Button>
      </form>
    </Container>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL, displayName } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: messageClass === 'sent' ? 'flex-end' : 'flex-start',
        marginBottom: '10px',
      }}
    >
      <Box
        sx={{
          maxWidth: '70%',
          minWidth: '20%',
          borderRadius: '10px',
          padding: '10px',
          backgroundColor: messageClass === 'sent' ? '#dcf8c6' : '#fff',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
          alignSelf: messageClass === 'sent' ? 'flex-end' : 'flex-start',
        }}
      >
        {messageClass === 'received' && (
          <Tooltip title={displayName} placement="top">
            <Avatar src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt="Avatar" sx={{ marginRight: '10px', cursor: 'pointer' }} />
          </Tooltip>
        )}
        <Typography variant="body1">{text}</Typography>
      </Box>
      {messageClass === 'sent' && (
        <Avatar src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt="Avatar" sx={{ marginLeft: '10px', marginTop: '5px' }} />
      )}
    </Box>
  );
};

export default ChatRoom;
