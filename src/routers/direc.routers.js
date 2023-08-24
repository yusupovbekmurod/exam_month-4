import { Router } from "express";
import direc from "../controller/directions.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const direcRouter = Router();

direcRouter
  .get("/", checkToken, direc.get)
  .get("/:id", checkToken, direc.get)
  .post("/", checkToken, direc.post)
  .put("/:id", checkToken, direc.put)
  .delete("/:id", checkToken, direc.delete);

export default direcRouter;
