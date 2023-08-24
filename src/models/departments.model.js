import depModel from "../schemas/dep.schemas.js";
import { Types } from "mongoose";
class departments {
  async select(id, filter, option) {
    try {
      if (id)
        return await depModel.findById(id, option).populate("center_ref_id");
      return await depModel.find(filter, option).populate("center_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await depModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await depModel.deleteOne(
      { _id: new Types.ObjectId(id) },
      { delete_at: Date.now() },
      { upsert: true }
    );
  }
}

export default new departments();
