import { Router } from "express";
import pos from "../controller/positions.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const posRouter = Router();

posRouter
  .get("/", pos.get)
  .get("/:id",pos.get)
  .post("/", pos.post)
  .put("/:id",pos.put)
  .delete("/:id",pos.delete);

export default posRouter;
