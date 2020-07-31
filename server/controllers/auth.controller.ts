import * as express from "express";
const router = express.Router();

// Middlewares
import { ErrorHandler } from "../middlewares/errorHandler.middleware";
import { ResponseHandler } from "../middlewares/responseHandler.middleware";

// Services
import authService from "../services/auth.service";

// Helpers
import jwtHelper from "../helpers/jwt.helper";
import { checkTokenAdmin } from "../middlewares/jwt.middleware";

router.post(`/signup`, checkTokenAdmin, async (req, _, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw new ErrorHandler(423, "Missing informations for signup");
    }

    await authService.createNewUser(username, password);

    next(new ResponseHandler(200, "New user created"));
  } catch (err) {
    next(err);
  }
});

router.get(`/login`, async (req, _, next) => {
  const { u: username, p: password } = req.query;

  try {
    if (!username || !password) {
      throw new ErrorHandler(403, "Wrong credentials");
    }

    const user = await authService.login({
      username: (username as string).toLowerCase(),
      password: (password as string).toLowerCase(),
    });

    const token = authService.createJWTToken(user);

    next(new ResponseHandler(200, "Logged In", token));
  } catch (err) {
    next(err);
  }
});

router.get(`/jwt`, async (req, _, next) => {
  const token = req.headers["authorization"];

  try {
    if (!token) {
      throw new ErrorHandler(403, "No token sent");
    }

    if (!jwtHelper.validateJWTToken(token)) {
      throw new ErrorHandler(403, "Invalid token");
    }
    next(new ResponseHandler(200, "Logged In"));
  } catch (err) {
    next(err);
  }
});

export default router;
