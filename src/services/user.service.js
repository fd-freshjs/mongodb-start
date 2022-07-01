const userModel = require('../db/models/user');

module.exports.createUser = async (data) => {
  try {
    const User = userModel();

    const result = await User.insertOne(data);
    // result.insertedId

    return result.insertedId;
  } catch (error) {
    console.log(error);
  }
};
