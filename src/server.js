import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transationRoutes.js";
import { conncetDb } from "./config/database.js";

const PORT = process.env.PORT;
conncetDb();

const app = express();
app.use(json());

app.use(authRouter);
app.use(transactionRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
