import check from "../models/checks.model.js";

class CheckContr {
  async get(req, res) {
    try {
      const id = req.params?.id;
      let data;
      if (id) data = await check.select(id);
      else if (Object.keys(req.query).length)
        data = await check.select(null, req.query);
      else data = await check.select();

      return res.send({
        status: 200,
        data,
        message: "checks",
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
        data: await check.insert(req.body),
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
      const { not_in_class } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $addToSet: {
          not_in_class: { $each: not_in_class },
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
        data: await check.delete(id),
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

export default new CheckContr();
