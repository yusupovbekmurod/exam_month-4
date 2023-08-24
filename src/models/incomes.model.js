import incomModel from "../schemas/incomes.schemas.js";
import { Types } from "mongoose";
class Incomes {
  async select(id, filter, option) {
    try {
      if (id)
        return await incomModel.findById(id, option).populate("user_ref_id");
      return await incomModel.find(filter, option).populate("user_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await incomModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await incomModel.deleteOne(
      { _id: new Types.ObjectId(id) },
      { delete_at: Date.now() },
      { upsert: true }
    );
  }
}

export default new Incomes();
