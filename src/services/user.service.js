const { User } = require("../db/");

module.exports.createUser = async (data) => {
  const result = await User.create(data);

  return result;
};

module.exports.deleteUserById = async (id) => {
  const result = await User.deleteOne({ _id: id });

  // user = findOne({ _id: id })

  return result.deletedCount > 0;
};

module.exports.findUserById = async (id) => {
  const result = await User.findOne({ _id: id });

  return result;
};

module.exports.findUsers = async (filter, page = 1, rows = 5) => {
  const results = await User.find(filter) // WHERE
    .skip((page - 1) * rows) /// OFFSET
    .limit(rows); // LIMIT;

  return results;
};

module.exports.updateUsetById = async (id, data = {}) => {
  const updatedUser = await User.updateOne({ _id: id }, { $set: { ...data } });

  if (updatedUser.modifiedCount !== 1) {
    throw new Error("404 User not found");
  }

  const foundUser = await User.findOne({ _id: id });

  return foundUser;
};
