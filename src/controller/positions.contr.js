import pos from "../models/positions.models.js";

class PosContr {
  async get(req, res) {
    try {
      const id = req.params?.id;
      let data;
      if (id) data = await pos.select(id);
      else if (Object.keys(req.query).length)
        data = await pos.select(null, req.query);
      else data = await pos.select();

      return res.send({
        status: 200,
        data,
        message: "positions",
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
        data: await pos.insert(req.body),
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
      const { pos_name, salary } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          pos_name: pos_name,
          salary: salary,
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
        data: await pos.delete(id),
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

export default new PosContr();
