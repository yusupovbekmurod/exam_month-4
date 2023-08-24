import { Router } from "express";
import gr from "../controller/group.contr.js";
import { checkToken } from "../middlewares/checkToken.js";

const groupRouter = Router();

groupRouter
  .get("/", checkToken, gr.get)
  .get("/:id", checkToken, gr.get)
  .post("/", checkToken, gr.post)
  .put("/:id", checkToken, gr.put)
  .delete("/:id", checkToken, gr.delete);

export default groupRouter;
