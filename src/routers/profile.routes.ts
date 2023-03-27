import { Router } from "express";
import { profileController } from "../controllers/user/users.controllers";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";

const profileRoutes: Router = Router();

profileRoutes.get("", tokenAuthMiddleware, profileController);

export default profileRoutes;
