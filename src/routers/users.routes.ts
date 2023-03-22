import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retriveUserController,
  updateUserController,
} from "../controllers/user/users.controllers";
import dataValidMiddleware from "../middleware/dataValid.middleware";
import uuidExistsMiddleware from "../middleware/existUuid.middleware";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";
import { userSchema, userUpdate } from "../schemas/user/user.schemas";

const userRoutes: Router = Router();

userRoutes.post("", dataValidMiddleware(userSchema), createUserController);
userRoutes.get("", listUsersController);
userRoutes.get(
  "/:id",
  tokenAuthMiddleware,
  uuidExistsMiddleware,
  retriveUserController
);
userRoutes.patch(
  "",
  dataValidMiddleware(userUpdate),
  tokenAuthMiddleware,
  updateUserController
);
userRoutes.delete("", tokenAuthMiddleware, deleteUserController);

export default userRoutes;
