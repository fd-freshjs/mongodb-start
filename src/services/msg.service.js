const { ObjectId } = require("mongodb");
const msgModel = require("../db/models/msg");
const userModel = require("../db/models/user");

module.exports.createMsg = async (data) => {
  const Msg = msgModel();
  const User = userModel();

  // check if author and user_to exists
  const author = await User.findOne({ _id: ObjectId(data.author_id) });
  if (!author) {
    throw new Error("404 Author not found");
  }

  const interlocutor = await User.findOne({ _id: ObjectId(data.to_user_id) });
  if (!interlocutor) {
    throw new Error("404 Interlocutor not found");
  }

  const result = await Msg.insertOne(data);
  // result.insertedId

  return { _id: result.insertedId, ...data };
};

module.exports.deleteMsgById = async (id) => {
  const Msg = msgModel();

  const result = await Msg.deleteOne({ _id: ObjectId(id) });

  // msg = findOne({ _id: ObjectId(id) })

  return result.deletedCount > 0;
};

module.exports.findMsgById = async (id) => {
  const Msg = msgModel();

  const result = await Msg.findOne({ _id: ObjectId(id) });

  return result;
};

module.exports.findMsgs = async (filter, page = 1, rows = 5) => {
  const Msg = msgModel();

  console.log(page, rows);

  const results = await Msg.find(filter) // WHERE
    .skip((page - 1) * rows) /// OFFSET
    .limit(rows) // LIMIT
    .toArray();

  return results;
};

module.exports.updateUsetById = async (id, data = {}) => {
  const Msg = msgModel();

  // delete author_id and user_to fields

  const updatedMsg = await Msg.updateOne(
    { _id: ObjectId(id) },
    { $set: { ...data } }
  );

  if (updatedMsg.modifiedCount !== 1) {
    throw new Error("404 Msg not found");
  }

  const foundMsg = await Msg.findOne({ _id: ObjectId(id) });

  return foundMsg;
};
