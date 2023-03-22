import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retriveUserController,
  updateUserController,
} from "../controllers/user/users.controllers";
import dataValidMiddleware from "../middleware/dataValid.middleware";
import userExistsMiddleware from "../middleware/existUser.middleware";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";
import { userSchema, userUpdate } from "../schemas/user/user.schemas";

const userRoutes: Router = Router();

userRoutes.post("", dataValidMiddleware(userSchema), createUserController);
userRoutes.get("", listUsersController);
userRoutes.get(
  "/:id",
  tokenAuthMiddleware,
  userExistsMiddleware,
  retriveUserController
);
userRoutes.patch(
  "",
  dataValidMiddleware(userUpdate),
  tokenAuthMiddleware,
  userExistsMiddleware,
  updateUserController
);
userRoutes.delete(
  "",
  tokenAuthMiddleware,
  userExistsMiddleware,
  deleteUserController
);

export default userRoutes;
