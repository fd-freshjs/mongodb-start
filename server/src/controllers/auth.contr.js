const bcrypt = require('bcrypt');
const { createAccessToken } = require('../services/token.service');
const { createUser, findByEmail } = require("../services/user.service");

module.exports.registerUserContr = async (req, res, next) => {
  try {
    const data = req.body;

    const createdUser = await createUser(data);

    res.status(200).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.loginUserContr = async (req, res, next) => {
  try {
    /* LOGIN PART */
    const data = req.body;

    if (!data.email || !data.password) {
      throw new Error('Invalid login or password');
    }

    // get user from db
    const foundUser = (await findByEmail(data.email)).toObject();
    
    if (!foundUser) {
      throw new Error('Invalid login or password');
    }
    
    // check login and password
    const isPassValid = await bcrypt.compare(data.password, foundUser.password);
    
    if (!isPassValid) {
      throw new Error('Invalid login or password');
    }

    /* TOKEN PART */
    foundUser.password = undefined;

    const accessToken = await createAccessToken({ id: foundUser._id, email: foundUser.email });

    res.status(200).send({ data: foundUser, tokens: { access: accessToken } });
  } catch (error) {
    next(error);
  }
}
