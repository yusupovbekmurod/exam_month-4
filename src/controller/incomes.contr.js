import income from "../models/incomes.model.js";
import jwt from "jsonwebtoken";

class IncomContr {
  async get(req, res) {
    try {
      const token = req.headers.token;
      const dateToken = jwt.verify(token, process.env.SECRET);
      const id = req.params?.id;
      let data;
      if (!id) data = await income.select(id);
      else if (Object.keys(req.query).length)
        data = await income.select(null, req.query);
      else data = await income.select();

      const resp = await income.select(null, {
        email: dateToken.token,
      });
      console.log(resp);
      return res.send({
        status: 200,
        data,
        message: "incomes",
      });
    } catch (error) {
      return res.status(501).json({
        status: 501,
        data: null,
        message: error.message,
      });
    }
  }
  async post(req, res) {
    try {
      return res.send({
        status: 201,
        data: await income.insert(req.body),
        message: "success",
      });
    } catch (error) {
      return res.status(501).json({
        status: 501,
        data: null,
        message: error.message,
      });
    }
  }
  async put(req, res) {
    try {
      const id = req.params?.id;
      const { reason, amount } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          reason: reason,
          amount: amount,
        },
      };
      return res.send({
        status: 201,
        data: await center.update({ _id: id }, obj),
        message: "success",
      });
    } catch (error) {
      return res.status(501).json({
        status: 501,
        data: null,
        message: error.message,
      });
    }
  }
}

export default new IncomContr();
