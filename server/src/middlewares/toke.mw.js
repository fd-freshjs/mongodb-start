module.exports.checkTokenMw = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    const verdict = verifyAccessToken(accessToken);

    next();
  } catch (error) {
    next(error);
  }
}