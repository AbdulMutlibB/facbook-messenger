import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Messages from "./Messages";
import firebase from "firebase";
import db from "./Config/firebase";
import FlipMove from "react-flip-move";

import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

// useState = variable in React
// useEffect = run code on a condition in React

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Please Enter Your UserName"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessages = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png"
      />
      <h2>Welcome {userName}</h2>
      <form className="App_form">
        <FormControl className="App_formControl">
          <Input
          placeholder ="Enter a message"
            className="App__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className ="App__iconButton" 
            disabled={!input}
            variant="contained"
            color="primary"
            onClick={sendMessages}
          >
            <SendIcon/> 
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Messages key={id} user={userName} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
