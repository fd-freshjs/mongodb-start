const { Router } = require('express');
const { updateUserContr, deleteUserByIdContr, findUserByIdContr, findUsersContr } = require("../controllers/user.contr");
const { checkTokenMw } = require('../middlewares/token.mw');

// /api/users
const userRouter = Router();

userRouter.get('/:id', findUserByIdContr);
userRouter.get('/', findUsersContr);

userRouter.patch('/', checkTokenMw, updateUserContr);

userRouter.delete('/:id', checkTokenMw, deleteUserByIdContr);

module.exports = userRouter;
