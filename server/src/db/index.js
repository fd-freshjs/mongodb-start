const mongoose = require("mongoose");

const uri = "mongodb://mongo-db:27017/fd_mongo";

mongoose.connect(uri).catch(console.error);

module.exports = {
  User: require("./models/user"),
  Msg: require("./models/msg"),
};
