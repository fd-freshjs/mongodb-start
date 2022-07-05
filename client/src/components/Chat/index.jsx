import React from "react";
import ChatForm from "../ChatForm";
// import MessageList from "../MessageList";

//rfce
function Chat() {

  const handleSubmit = () => {
    // send data to server
  };

  return (
    <div>
      {/* <MessageList list={[]} /> */}
      <ChatForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;
