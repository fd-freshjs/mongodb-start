import { io } from "socket.io-client";

export const socket = io("ws://localhost:5000", {
  auth: { userId: "123" },
  transports: ["websocket"],
});

socket.on('newMessage', (newMsg) => {
  const sub = subscribers.find(sub => sub.eventName === 'newMessage');
  if (sub) {
    sub.callback(newMsg);
  }
});

const subscribers = [];

export const addSubscriber = (eventName, callback) => {
  subscribers.push({ eventName, callback });
}
