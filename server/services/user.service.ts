import { Types } from "mongoose";

// Interfaces
import { User } from "../interfaces/user.interface";

// Models
import user from "../models/user.model";

class UserService {
  constructor() {}

  async createANewUser(newUser: User): Promise<User | undefined> {
    const res = await user.findOne(newUser);
    if (res) {
      return undefined;
    }

    return user.create(newUser);
  }

  async getUser(userInfo: User): Promise<User> {
    return user.findOne(userInfo);
  }

  async updateAUser(
    id: Types.ObjectId,
    newInfo: { [key: string]: any }
  ): Promise<User> {
    return user.updateOne({ _id: id }, { $set: newInfo }, { new: true });
  }
}

export default new UserService();
