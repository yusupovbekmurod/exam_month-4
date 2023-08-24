import userModel from "../schemas/users.schemas.js";
import { Types } from "mongoose";
class Users {
  async select(id, filter, option) {
    try {
      if (id)
        return await userModel
          .findById(id, option)
          .populate("pos_ref_id")
          .populate("group_ref_id");
      return await userModel
        .find(filter, option)
        .populate("pos_ref_id")
        .populate("group_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await userModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await userModel.updateOne(
      { _id: new Types.ObjectId(id) },
      { left_date : Date.now() },
      { upsert: true }
    );
  }
}

export default new Users();
