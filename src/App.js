import "./App.css";
import React, { useState,useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Messages from './Messages'

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName,setUserName] = useState('')

  useEffect(() => {
    setUserName(prompt('Please Enter Your UserName'))
  }, [])
  console.log(input);
  
  console.log(messages);
  
  
  const sendMessages = (e) => {
    e.preventDefault();
    setMessages([...messages, {username : userName, text : input} ]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Abdul Mutlib Butt</h1>
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

      {messages.map((message) => {
        return(
          <Messages user ={userName}
            message={message} />
        )
      })}
    </div>
  );
}

export default App;
