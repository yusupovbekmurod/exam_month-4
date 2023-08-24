import { Router } from "express";
import outlay from "../controller/outlay.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const outlayRouter = Router();

outlayRouter
  .get("/", checkToken, outlay.get)
  .get("/:id", checkToken, outlay.get)
  .post("/", checkToken, outlay.post)
  .put("/:id", checkToken, outlay.put);

export default outlayRouter;
