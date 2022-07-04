const { Router } = require('express');
const { createUserContr, deleteUserByIdContr, findUserByIdContr, findUsersContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();

userRouter.post('/', createUserContr);

userRouter.get('/:id', findUserByIdContr);
userRouter.get('/', findUsersContr);

userRouter.patch('/', createUserContr);

userRouter.delete('/:id', deleteUserByIdContr);


module.exports = userRouter;
