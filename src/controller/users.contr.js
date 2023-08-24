import user from "../models/users.model.js";
import group from "../models/groups.model.js";
import jwt from "jsonwebtoken";
import jwtToken from "../utils/jwt.js";
class UserContr {
  async login(req, res) {
    try {
      let data;
      let { email, contact } = req.body;
      data = await user.select(null, {
        email,
      });
      if (data.length != 0) res.send(jwtToken.SIGN(email));
      res.send({ status: 429, message: "xato" });
    } catch (error) {
      res.send({ status: 404, message: error.message });
    }
  }

  async get(req, res) {
    try {
      if (!req.headers.token) {
        const id = req.params?.id;
        let data;
        if (id) data = await user.select(id);
        else if (Object.keys(req.query).length)
          data = await user.select(null, req.query);
        else data = await user.select();
        return res.send({
          status: 200,
          data,
          message: "users",
        });
      } else {
        const token = req.headers.token;
        const date = jwt.verify(token, process.env.SECRET);
        const resp = await user.select(null, {
          email: date.token,
        });
        for (const x of resp) {
          if (x.pos_ref_id.pos_name == "Student") {
            return res.send({
              status: 200,
              data: resp,
              message: "users",
            });
          }else if (x.pos_ref_id.pos_name == "Teacher"){
            let id = x.group_ref_id;
            res.send({
              status: 200,
              data:[await user.select(x._id),await group.select(id)],
              message: "users",
            });
          }
        }
      }
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
        data: await user.insert(req.body),
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
      const { first_name, last_name, gender, contact, email } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          first_name: first_name,
          last_name: last_name,
          gender: gender,
          contact: contact,
          email: email,
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
  async delete(req, res) {
    try {
      const id = req.params?.id;
      return res.send({
        status: 201,
        data: await user.delete(id),
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

export default new UserContr();
