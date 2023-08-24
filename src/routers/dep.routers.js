import { Router } from "express";
import dep from "../controller/departments.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const depRouter = Router();

depRouter
  .get("/",checkToken,dep.get)
  .get("/:id", dep.get)
  .post("/", checkToken, dep.post)
  .put("/:id",dep.put)
  .delete("/:id", checkToken, dep.delete);

export default depRouter;
