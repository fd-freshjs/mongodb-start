const { Router } = require('express');
const { createUserContr, deleteUserByIdContr, findUserByIdContr, findUsersContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();

userRouter.get('/messages', (req, res, next) => {
  setTimeout(() => {
    res.send({ text: 'test text' })
  }, 15000);
});

userRouter.post('/', createUserContr);

userRouter.get('/:id', findUserByIdContr);
userRouter.get('/', findUsersContr);

userRouter.patch('/', createUserContr);

userRouter.delete('/:id', deleteUserByIdContr);


module.exports = userRouter;
