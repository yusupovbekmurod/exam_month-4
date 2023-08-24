import { Router } from "express";
import dep from "../controller/departments.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const checkRouter = Router();

checkRouter
  .get("/", checkToken, dep.get)
  .get("/:id", checkToken, dep.get)
  .post("/", checkToken, dep.post)
  .put("/:id", checkToken, dep.put)
  .delete("/:id", checkToken, dep.delete);

export default checkRouter;
