import { io } from "socket.io-client";
import CONSTANTS from "../constants";
const {
  wsEventTypes: { NEW_MESSAGE },
} = CONSTANTS;

// localhost:5000
export const socket = io("http://localhost:5000", {
  auth: { userId: "123" },
});

socket.on(NEW_MESSAGE, (newMsg) => {
  const sub = subscribers.find((sub) => sub.eventName === NEW_MESSAGE);
  if (sub) {
    sub.callback(newMsg);
  }
});

const subscribers = [];

export const addSubscriber = (eventName, callback) => {
  subscribers.push({ eventName, callback });
};
