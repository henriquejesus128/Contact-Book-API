import express, { Application } from "express";
import user from "./routers/users.routes";
import contact from "./routers/contacts.routes";
import errorHandler from "./errors/handleError";

const app: Application = express();

app.use(express.json());

app.use("/users", user);
app.use("/contacts", contact);
app.use(errorHandler);

export default app;
