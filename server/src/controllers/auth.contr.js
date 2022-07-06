const { createUser } = require("../services/user.service");

module.exports.registerUserContr = async (req, res, next) => {
  try {
    const data = req.body;

    const createdUser = await createUser(data);

    res.status(200).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.loginUserContr = async () => {
  try {
    res.send('ok')
  } catch (error) {
    next(error);
  }
}
