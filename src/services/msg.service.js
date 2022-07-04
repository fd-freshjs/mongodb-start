const { User, Msg } = require("../db/");

module.exports.createMsg = async (data) => {
  // check if author and user_to exists
  const author = await User.findById(data.author_id).exec();

  if (!author) {
    throw new Error("404 Author not found");
  }

  const interlocutor = await User.findById(data.to_user_id).exec();
  if (!interlocutor) {
    throw new Error("404 Interlocutor not found");
  }

  const result = await Msg.create(data);
  // result.insertedId

  return result;
};

module.exports.deleteMsgById = async (id) => {
  const result = await Msg.deleteOne({ _id: id });

  // msg = findOne({ _id: id })

  return result.deletedCount > 0;
};

module.exports.findMsgById = async (id) => {
  const result = await Msg.findById(id).exec();

  return result;
};

module.exports.findMsgs = async (filter, page = 1, rows = 5) => {
  const results = await Msg.find(filter) // WHERE
    .skip((page - 1) * rows) /// OFFSET
    .limit(rows) // LIMIT
    .exec();

  return results;
};

module.exports.updateUsetById = async (id, data = {}) => {
  // delete author_id and user_to fields

  const updatedMsg = await Msg.updateOne({ _id: id }, { $set: { ...data } });

  if (updatedMsg.modifiedCount !== 1) {
    throw new Error("404 Msg not found");
  }

  const foundMsg = await Msg.findById(id).exec();

  return foundMsg;
};
