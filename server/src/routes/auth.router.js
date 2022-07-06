const { Router } = require('express');
const { registerUserContr, loginUserContr } = require('../controllers/auth.contr');
const { registerUserValidateMW } = require('../middlewares/user.mw');

// /api/auth
const authRouter = Router();

authRouter.post('/register', registerUserValidateMW, registerUserContr);
authRouter.post('/login', loginUserContr);

module.exports = authRouter;
