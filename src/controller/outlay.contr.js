import outlay from "../models/outlay.models.js";

class OutlayContr {
  async get(req, res) {
    try {
      const id = req.params?.id;
      let data;
      if (id) data = await outlay.select(id);
      else if (Object.keys(req.query).length)
        data = await outlay.select(null, req.query);
      else data = await outlay.select();

      return res.send({
        status: 200,
        data,
        message: "outlay",
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
        data: await outlay.insert(req.body),
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
}

export default new OutlayContr();
