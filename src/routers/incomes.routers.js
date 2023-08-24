import { Router } from "express";
import incom from "../controller/incomes.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const incomRouter = Router();

incomRouter
  .get("/", incom.get)
  .get("/:id", checkToken, incom.get)
  .post("/", checkToken, incom.post)
  .put("/:id", checkToken, incom.put);

export default incomRouter;
