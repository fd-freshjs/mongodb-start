import { io } from "socket.io-client";
import CONSTANTS from "../constants";
const {
  wsEventTypes: { NEW_MESSAGE },
} = CONSTANTS;

// localhost:5000
export const socket = io("https://97b6-95-132-237-235.eu.ngrok.io", {
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
