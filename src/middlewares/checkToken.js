import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export function checkToken(req, res, next) {
  try {
    let token = req.headers.token;
    if (jwt.verify(token, process.env.SECRET)) {
      return next();
    }
    throw new Error("Unauthorized");
  } catch (error) {
    res.send({ status: 401, message: error.message });
  }
}
