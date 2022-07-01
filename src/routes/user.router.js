const { Router } = require('express');
const { createUserContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();

userRouter.post('/', createUserContr);

module.exports = userRouter;
