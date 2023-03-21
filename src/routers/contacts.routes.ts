import { Router } from "express";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";

const contactRoutes: Router = Router();

contactRoutes.post("", tokenAuthMiddleware);
contactRoutes.get("", tokenAuthMiddleware);
contactRoutes.get("/:id", tokenAuthMiddleware);
contactRoutes.patch("/:id", tokenAuthMiddleware);
contactRoutes.delete("/:id", tokenAuthMiddleware);

export default contactRoutes;
