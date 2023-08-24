import outlayModel from "../schemas/outlay.schemas.js";
import { Types } from "mongoose";
class Outlay {
  async select(id, filter, option) {
    try {
      if (id) return await outlayModel.findById(id, option);
      return await outlayModel.find(filter, option);
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await outlayModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await outlayModel.deleteOne(
      { _id: new Types.ObjectId(id) },
      { out_time : Date.now() },
      { upsert: true }
    );
  }
}

export default new Outlay();
