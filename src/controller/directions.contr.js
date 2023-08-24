import direc from "../models/directions.model.js";

class DirectionContr {
  async get(req, res) {
    try {
      const id = req.params?.id;
      let data;
      if (id) data = await direc.select(id);
      else if (Object.keys(req.query).length)
        data = await direc.select(null, req.query);
      else data = await direc.select();

      return res.send({
        status: 200,
        data,
        message: "directions",
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
        data: await direc.insert(req.body),
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
      const { dir_name, duration, salary } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          dir_name: dir_name,
          duration: duration,
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
        data: await direc.delete(id),
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

export default new DirectionContr();
