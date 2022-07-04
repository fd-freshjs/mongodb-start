const { createMessageSchema } = require('../validation');

module.exports.createMessageValidateBodyMw = async (req, res, next) => {
  try {
    const body = req.body;
    await createMessageSchema.validate(body);

    next();
  } catch (error) { 
    next(error);
  }
}