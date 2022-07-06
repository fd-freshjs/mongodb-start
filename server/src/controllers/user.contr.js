const { deleteUserById, findUserById, findUsers } = require("../services/user.service");

module.exports.deleteUserByIdContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedUser = await deleteUserById(id);

    res.status(200).send({ data: deletedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.findUserByIdContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const foundUser = await findUserById(id);

    res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};

module.exports.findUsersContr = async (req, res, next) => {
  try {
    const filter = req.body;
    const page = req.query.page;
    const rows = req.query.rows;

    const users = await findUsers(filter, page, rows);

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserContr = async (req, res, next) => {
  try {
    
    res.send('ok')
  } catch (error) {
    next(error);
  }
}
