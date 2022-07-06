import React, { useState, useEffect } from "react";
import ChatForm from "../ChatForm";
import MessageList from "../MessageList";
import { addSubscriber, socket } from "../../api/ws";
import CONSTANTS from "../../constants";

const {
  wsEventTypes: { NEW_MESSAGE, CREATE_MESSAGE },
} = CONSTANTS;

//rfce
function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    addSubscriber(NEW_MESSAGE, (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const handleSubmit = (values, formikBag) => {
    // send data to server
    socket.emit(CREATE_MESSAGE, values);
  };

  return (
    <div>
      <ChatForm onSubmit={handleSubmit} />
      <MessageList list={messages} />
    </div>
  );
}

export default Chat;
