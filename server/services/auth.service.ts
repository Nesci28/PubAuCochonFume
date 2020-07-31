// Interfaces
import { User } from "../interfaces/user.interface";

// Models
import user from "../models/user.model";

// Helpers
import passwordHelper from "../helpers/password.helper";
import jwtHelper from "../helpers/jwt.helper";

// Middlewares
import { ErrorHandler } from "../middlewares/errorHandler.middleware";

class AuthService {
  constructor() {}

  async login(userInfo: User): Promise<User | undefined> {
    const userDb: User = await user.findOne({ username: userInfo.username });

    if (!userDb) {
      throw new ErrorHandler(403, "Wrong credentials");
    }

    if (!passwordHelper.compare(userInfo.password, userDb.password)) {
      throw new ErrorHandler(403, "Wrong credentials");
    }

    return userDb;
  }

  async createNewUser(username: string, password: string): Promise<void> {
    await user.create({
      username,
      password: await passwordHelper.encrypt(password),
    });
  }

  createJWTToken(userInfo: User): string {
    return jwtHelper.createJWTToken(userInfo);
  }
}

export default new AuthService();
