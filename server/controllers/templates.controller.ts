import * as express from "express";
const router = express.Router();

// Middlewares
import { ErrorHandler } from "../middlewares/errorHandler.middleware";
import { ResponseHandler } from "../middlewares/responseHandler.middleware";

// Services
import templatesService from "../services/templates.service";

// Helpers
import { checkTokenAdmin } from "../middlewares/jwt.middleware";

router.get(`/`, async (req, _, next) => {
  try {
    const { templateId } = req.query;

    if (!templateId) {
      throw new ErrorHandler(423, "No templateId");
    }

    const template = await templatesService.getTemplate(templateId as string);

    if (!template) {
      throw new ErrorHandler(404, "No template found");
    }

    next(new ResponseHandler(200, "Template found", template));
  } catch (err) {
    next(err);
  }
});

router.post(`/`, checkTokenAdmin, async (req, _, next) => {
  try {
    const { templateId, elementId, data } = req.body;

    if (!templateId || !elementId || !data) {
      throw new ErrorHandler(423, "Missing informations");
    }

    await templatesService.updateTemplate(templateId, elementId, data);

    next(new ResponseHandler(200, "New template created"));
  } catch (err) {
    next(err);
  }
});

export default router;
