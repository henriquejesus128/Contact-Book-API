import { Router } from "express";

const contactRoutes: Router = Router();

contactRoutes.post("");
contactRoutes.get("");
contactRoutes.get("/:id");
contactRoutes.patch("/:id");
contactRoutes.delete("/:id");

export default contactRoutes;
