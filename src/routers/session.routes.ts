import { Router } from "express";
import { sessionController } from "../controllers/session/session.controller";
import dataValidMiddleware from "../middleware/dataValid.middleware";
import { sessionSchema } from "../schemas/session/session.schemas";

const sessionRouter = Router();

sessionRouter.post("", dataValidMiddleware(sessionSchema), sessionController);

export default sessionRouter;
