import React, { useState, useEffect } from "react";
import ChatForm from "../ChatForm";
import MessageList from "../MessageList";
import { addSubscriber, socket } from "../../api/ws";

//rfce
function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    addSubscriber("newMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const handleSubmit = (values, formikBag) => {
    // send data to server
    socket.emit("sendMessage", values);
  };

  console.log(messages);

  return (
    <div>
      <ChatForm onSubmit={handleSubmit} />
      <MessageList list={messages} />
    </div>
  );
}

export default Chat;
