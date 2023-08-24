import sendMail from "../middlewares/sender.js";
import center from "../models/centers.model.js";
import fs from "fs";
import jwtToken from "../utils/jwt.js";

class CenterContr {
  async login(req, res) {
    try {
      let data = JSON.parse(fs.readFileSync("./password.json", "utf-8"));
      let { email, pass } = req.body;
      if (email == data.email && pass == data.pass)
        res.send(jwtToken.SIGN(data));
      res.send({ status: 429, message: "parol xato " });
    } catch (error) {
      res.send({ status: 429, message: error.message });
    }
  }6
  async get(req, res) {
    try {
      const id = req.params?.id;
      let data;
      if (id) data = await center.select(id);
      else if (Object.keys(req.query).length)
        data = await center.select(null, req.query);
      else data = await center.select();

      return res.send({
        status: 200,
        data,
        message: "center",
      });
    } catch (error) {
      return res.status(501).json({
        status: 501,
        data: null,
        message: error.message,
      });
    }
  }
  async send(req, res) {
    try {
      const { email, text } = req.body;
      const num = Math.floor(Math.random() * 900 + 100);
      await sendMail(email, text, num);
      await fs.writeFileSync(
        "./password.json",
        JSON.stringify({ email, pass: num })
      );

      res.send(email + " gmailga xabar yuborildi ");
    } catch (error) {
      res.send({status: 500, message: error.message});
    }
  }
  async post(req, res) {
    try {
      return res.send({
        status: 201,
        data: await center.insert(req.body),
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
      const { name, address } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          name: name,
          address: address,
        },
      };
     
      return res.send({
        status: 201,
        data: await center.update({_id:id}, obj),
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
  async delete(req, res) {
    try {
      const id = req.params?.id;
      return res.send({
        status: 201,
        data: await center.delete(id),
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

export default new CenterContr();
