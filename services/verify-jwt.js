const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("INSIDE VALIDATION");
    const token = req.headers.authorization.replace("Bearer ", "");
    const decodeToken = verify(token, process.env.JWT_SECRET);
    res.locals.user = decodeToken;
    next();
  } catch (error) {
    res.status(401).send({ message: "Auth failed" });
    console.log(error);
  }
};
