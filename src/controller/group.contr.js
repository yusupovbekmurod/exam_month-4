import group from "../models/groups.model.js";

class GroupContr {
  async get(req, res) {
    try {
      const id = req.params?.id;
      let data;
      if (id) data = await group.select(id);
      else if (Object.keys(req.query).length)
        data = await group.select(null, req.query);
      else data = await group.select();

      return res.send({
        status: 200,
        data,
        message: "groups",
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
        data: await group.insert(req.body),
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
      const { gr_number } = req.body;
      let data;
      if (id) data = await center.select(id);
      const obj = {
        $set: {
          gr_number: gr_number,
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
        data: await group.delete(id),
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

export default new GroupContr();
