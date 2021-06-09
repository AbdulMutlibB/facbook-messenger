import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./message.css";

function Messages({ message, user }) {
  const isUser = user === message.username;
  
  return (
    <div className = {`message ${isUser && 'message_user'}`}> 
      <Card className={isUser ? "message-card" : "message-guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Messages;
