const { ObjectId } = require("mongodb");
const msgModel = require("../db/models/msg");

module.exports.createMsg = async (data) => {
  try {
    const Msg = msgModel();

    // check if author and user_to exists

    const result = await Msg.insertOne(data);
    // result.insertedId

    return { _id: result.insertedId, ...data };
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteMsgById = async (id) => {
  try {
    const Msg = msgModel();

    const result = await Msg.deleteOne({ _id: ObjectId(id) });

    // msg = findOne({ _id: ObjectId(id) })

    return result.deletedCount > 0;
  } catch (error) {
    console.log(error);
  }
};

module.exports.findMsgById = async (id) => {
  try {
    const Msg = msgModel();

    const result = await Msg.findOne({ _id: ObjectId(id) });

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.findMsgs = async (filter, page = 1, rows = 5) => {
  try {
    const Msg = msgModel();

    console.log(page, rows);

    const results = await Msg.find(filter) // WHERE
      .skip((page - 1) * rows) /// OFFSET
      .limit(rows) // LIMIT
      .toArray();

    return results;
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateUsetById = async (id, data = {}) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
