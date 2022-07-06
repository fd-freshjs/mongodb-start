const { registerUserSchema } = require("../validation");

module.exports.registerUserValidateMW = async (req, res, next) => {
  try {
    const data = req.body;

    await registerUserSchema.validate(data);

    next();
  } catch (error) {
    next(error);
  }
}