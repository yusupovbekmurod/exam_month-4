import groupModel from "../schemas/groups.schemas.js";
import { Types } from "mongoose";
class Group {
  async select(id, filter, option) {
    try {
      if (id)
        return await groupModel.findById(id, option).populate("dir_ref_id");
      return await groupModel.find(filter, option).populate("dir_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await groupModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await groupModel.updateOne(
      { _id: new Types.ObjectId(id) },
      { delete_at: Date.now() },
      { upsert: true }
    );
  }
}

export default new Group();
