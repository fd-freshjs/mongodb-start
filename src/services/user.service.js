const { ObjectId } = require("mongodb");
const userModel = require("../db/models/user");

module.exports.createUser = async (data) => {
  try {
    const User = userModel();

    const result = await User.insertOne(data);
    // result.insertedId

    return { _id: result.insertedId, ...data };
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteUserById = async (id) => {
  try {
    const User = userModel();

    const result = await User.deleteOne({ _id: ObjectId(id) });

    // user = findOne({ _id: ObjectId(id) })

    return result.deletedCount > 0;
  } catch (error) {
    console.log(error);
  }
};

module.exports.findUserById = async (id) => {
  try {
    const User = userModel();

    const result = await User.findOne({ _id: ObjectId(id) });

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.findUsers = async (filter, page = 1, rows = 5) => {
  try {
    const User = userModel();

    console.log(page, rows);

    const results = await User.find(filter) // WHERE
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
  } catch (error) {
    console.log(error);
  }
};