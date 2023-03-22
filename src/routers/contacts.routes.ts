import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  retriveContactController,
  updateContactController,
} from "../controllers/contact/contacts.controller";
import dataValidMiddleware from "../middleware/dataValid.middleware";
import existContactUserMiddleware from "../middleware/existContactUser.middleware";
import existContactMiddleware from "../middleware/existContactUser.middleware";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";
import { contactSchema } from "../schemas/contact/contact.schemas";

const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  tokenAuthMiddleware,
  dataValidMiddleware(contactSchema),
  existContactUserMiddleware,
  createContactController
);
contactRoutes.get("", tokenAuthMiddleware, listContactsController);
contactRoutes.get(
  "/:id",
  tokenAuthMiddleware,
  existContactMiddleware,
  retriveContactController
);
contactRoutes.patch("/:id", tokenAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", tokenAuthMiddleware, deleteContactController);

export default contactRoutes;
