import "express-async-errors";
import express, { Application } from "express";
import user from "./routers/users.routes";
import session from "./routers/session.routes";
import contact from "./routers/contacts.routes";
import profile from "./routers/profile.routes";
import errorHandler from "./errors/errorHandler";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/users", user);
app.use("/profile", profile);
app.use(`/session`, session);
app.use("/contacts", contact);
app.use(errorHandler);

export default app;
