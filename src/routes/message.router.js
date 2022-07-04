const { Router } = require('express');
const { createMsgContr, deleteMsgByIdContr, findMsgByIdContr, findMsgsContr } = require("../controllers/message.contr");
const { createMessageValidateBodyMw } = require('../middlewares/msg.mw');

// /api/messages
const msgRouter = Router();

msgRouter.post('/', createMessageValidateBodyMw, createMsgContr);

msgRouter.get('/:id', findMsgByIdContr);
msgRouter.get('/', findMsgsContr);

msgRouter.patch('/', createMsgContr);

msgRouter.delete('/:id', deleteMsgByIdContr);


module.exports = msgRouter;
