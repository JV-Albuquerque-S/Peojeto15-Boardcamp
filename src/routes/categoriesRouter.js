import { Router } from "express";

import { getCategories, postCategories } from "../controllers/categoriesController.js";

//import {[validation]} from "../middlewares/categorieValidation.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories", postCategories);

export default categoriesRouter;