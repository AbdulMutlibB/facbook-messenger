import React, { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./message.css";

const Messages = forwardRef(({ message, user },ref) => {
  const isUser = user === message.username;
  return (
    <div ref = {ref} className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser &&`${message.username || 'Unknown User'}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
