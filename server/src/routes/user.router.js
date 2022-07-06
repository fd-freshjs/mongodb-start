const { Router } = require('express');
const { updateUserContr, deleteUserByIdContr, findUserByIdContr, findUsersContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();

userRouter.get('/:id', findUserByIdContr);
userRouter.get('/', findUsersContr);

userRouter.patch('/', updateUserContr);

userRouter.delete('/:id', deleteUserByIdContr);

module.exports = userRouter;
