import { Router } from "express";
import center from "../controller/center.contr.js";
import { checkToken } from "../middlewares/checkToken.js";
const centerRouter = Router();

centerRouter
  .get("/", checkToken, center.get)
  .get("/:id", checkToken, center.get)
  .post("/check", center.login)
  .post("/send", center.send)
  .post("/",checkToken, center.post)
  .put("/:id",checkToken, center.put)
  .delete("/:id", checkToken, center.delete);

export default centerRouter;
