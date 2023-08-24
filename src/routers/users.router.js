import { Router } from "express";
import user from "../controller/users.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const userRouter = Router();

userRouter
  .get("/", user.get)
  .post("/", checkToken, user.post)
  .post("/login", user.login)
  .put("/:id", checkToken, user.put)
  .delete("/:id", checkToken, user.delete);

export default userRouter;
