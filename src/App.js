import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Messages from "./Messages";
import firebase from "firebase";
import db from "./Config/firebase";
import FlipMove from "react-flip-move";

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
        setMessages(snapshot.docs.map((doc) => doc.data()));
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
      <h2>Welcome {userName}</h2>
      <FormControl>
        <InputLabel color="primary" htmlFor="my-input">
          type any message
        </InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={sendMessages}
        >
          Send Message
        </Button>
      </FormControl>
      <FlipMove>
        {messages.map((message) => {
          return <Messages user={userName} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
