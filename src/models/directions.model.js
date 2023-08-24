import direcModel from "../schemas/direction.schemas.js";
import { Types } from "mongoose";
class Directions {
  async select(id, filter, option) {
    try {
      if (id)
        return await direcModel.findById(id, option).populate("dep_ref_id");
      return await direcModel.find(filter, option).populate("dep_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await direcModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await direcModel.deleteOne(
      { _id: new Types.ObjectId(id) },
      { end_date : Date.now() },
      { upsert: true }
    );
  }
}

export default new Directions();
