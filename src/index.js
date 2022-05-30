import express, {json} from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";

import categoriesRouter from "./routes/categoriesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

// routes
app.use(categoriesRouter);
app.use(gamesRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(chalk.italic.green(`Servidor em pé na porta ${port}`));
});