import checkModel from "../schemas/check.schemas.js";
import { Types } from "mongoose";
class Check {
  async select(id, filter, option) {
    try {
      if (id)
        return await checkModel
          .findById(id, option)
          .populate("gr_ref_id")
          .populate("gr_ref_id");
      return await checkModel
        .find(filter, option)
        .populate("user_ref_id")
        .populate("user_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await checkModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await checkModel.deleteOne(
      { _id: new Types.ObjectId(id) },
      { delete_at: Date.now() },
      { upsert: true }
    );
  }
}

export default new Check();
