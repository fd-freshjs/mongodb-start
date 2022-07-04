const { createMsg, deleteMsgById, findMsgById, findMsgs } = require("../services/msg.service");

module.exports.createMsgContr = async (req, res, next) => {
  try {
    const data = req.body;

    const createdMsg = await createMsg(data);

    res.status(200).send({ data: createdMsg });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteMsgByIdContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedMsg = await deleteMsgById(id);

    res.status(200).send({ data: deletedMsg });
  } catch (error) {
    next(error);
  }
};

module.exports.findMsgByIdContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const foundMsg = await findMsgById(id);

    res.status(200).send({ data: foundMsg });
  } catch (error) {
    next(error);
  }
};

module.exports.findMsgsContr = async (req, res, next) => {
  try {
    const filter = req.body;
    const page = req.query.page;
    const rows = req.query.rows;

    const msgs = await findMsgs(filter, page, rows);

    res.status(200).send({ data: msgs });
  } catch (error) {
    next(error);
  }
};
