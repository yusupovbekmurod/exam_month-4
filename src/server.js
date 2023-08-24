import express from "express";
import "./db/mongo.js";
import userRouter from "./routers/users.router.js";
import centerRouter from "./routers/center.routers.js";
import depRouter from "./routers/dep.routers.js";
import direcRouter from "./routers/direc.routers.js";
import posRouter from "./routers/postion.routers.js";
import groupRouter from "./routers/group.routers.js";
import checkRouter from "./routers/check.routers.js";
import incomRouter from "./routers/incomes.routers.js";
import outlayRouter from "./routers/outlay.routers.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/centers", centerRouter);
app.use("/departments", depRouter);
app.use("/directions", direcRouter);
app.use("/positions", posRouter);
app.use("/groups", groupRouter);
app.use("/checks", checkRouter);
app.use("/incomes", incomRouter);
app.use("/outlay", outlayRouter);

app.listen(PORT);
console.log("server listening " + PORT);
