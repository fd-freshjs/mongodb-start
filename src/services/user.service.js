const { ObjectId } = require("mongodb");
const userModel = require("../db/models/user");

module.exports.createUser = async (data) => {
  const User = userModel();

  const result = await User.insertOne(data);
  // result.insertedId

  return { _id: result.insertedId, ...data };
};

module.exports.deleteUserById = async (id) => {
  const User = userModel();

  const result = await User.deleteOne({ _id: ObjectId(id) });

  // user = findOne({ _id: ObjectId(id) })

  return result.deletedCount > 0;
};

module.exports.findUserById = async (id) => {
  const User = userModel();

  const result = await User.findOne({ _id: ObjectId(id) });

  return result;
};

module.exports.findUsers = async (filter, page = 1, rows = 5) => {
  const User = userModel();

  console.log(page, rows);

  const results = await User.find(filter) // WHERE
    .skip((page - 1) * rows) /// OFFSET
    .limit(rows) // LIMIT
    .toArray();

  return results;
};

module.exports.updateUsetById = async (id, data = {}) => {
  const User = userModel();

  const updatedUser = await User.updateOne(
    { _id: ObjectId(id) },
    { $set: { ...data } }
  );

  if (updatedUser.modifiedCount !== 1) {
    throw new Error("404 User not found");
  }

  const foundUser = await User.findOne({ _id: ObjectId(id) });

  return foundUser;
};
