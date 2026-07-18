import express from "express";
import CustumerRouter from "./routes/custumer.router.js";

const app = express();
app.use(express.json());

app.use('/custumers', CustumerRouter);

app.listen(3000);