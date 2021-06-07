import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Messages from './Messages'

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);
  const sendMessages = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Abdul Mutlib Butt</h1>

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

      {messages.map((chat, index) => {
        return(
          <Messages text ={chat} />
        )
      })}
    </div>
  );
}

export default App;
