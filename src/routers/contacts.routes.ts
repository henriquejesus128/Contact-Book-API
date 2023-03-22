import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  retriveContactController,
  updateContactController,
} from "../controllers/contact/contacts.controller";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";

const contactRoutes: Router = Router();

contactRoutes.post("", tokenAuthMiddleware, createContactController);
contactRoutes.get("", tokenAuthMiddleware, listContactsController);
contactRoutes.get("/:id", tokenAuthMiddleware, retriveContactController);
contactRoutes.patch("/:id", tokenAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", tokenAuthMiddleware, deleteContactController);

export default contactRoutes;
