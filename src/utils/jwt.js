import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default {
  SIGN: (payload) => {
    return jwt.sign({ token: payload }, process.env.SECRET, {
      expiresIn: "2 days",
    });
  },
};
