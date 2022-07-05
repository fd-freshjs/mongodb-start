import React, { useState } from "react";
import ChatForm from "../ChatForm";
import { addSubscriber } from '../../api/ws';
import { useEffect } from "react";
// import MessageList from "../MessageList";

//rfce
function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    addSubscriber('newMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  const handleSubmit = () => {
    // send data to server
    
  };

  console.log(messages);

  return (
    <div>
      {/* <MessageList list={messages} /> */}
      <ChatForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;
