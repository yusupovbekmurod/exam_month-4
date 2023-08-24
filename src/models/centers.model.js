import centrMod from "../schemas/center.schemas.js";
import { Types } from "mongoose";
class Center {
  async select(id, filter, option) {
    try {
      if (id) return await centrMod.findById(id, option);
      return await centrMod.find(filter, option);
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await centrMod.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await centrMod.updateOne(
      { _id: new Types.ObjectId(id) },
      { close_at: Date.now() },
      { upsert: true }
    );
  }
}

export default new Center();
