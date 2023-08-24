import departments from "../models/departments.model.js";
import center from "../models/centers.model.js";

class departmentsContr {
  async get(req, res) {
    try {
      const refcenter = await center.center_ref_id;
      const id = req.params?.id;
      let data;
      if (id) data = await departments.select(id);
      else if (Object.keys(req.query).length)
        data = await departments.select(null, req.query);
      else
        data = await departments.select();

      return res.send({
        status: 200,
        data,
        message: "departments",
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
        data: await departments.insert(req.body),
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
      const { dep_name } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          dep_name: dep_name,
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
        data: await departments.delete(id),
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

export default new departmentsContr();
