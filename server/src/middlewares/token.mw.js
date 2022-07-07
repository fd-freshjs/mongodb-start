module.exports.checkTokenMw = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    const verdict = await verifyAccessToken(accessToken);

    if (!verdict) {
      throw new Error("Unauthorized");
    }

    next();
  } catch (error) {
    next(error);
  }
};
