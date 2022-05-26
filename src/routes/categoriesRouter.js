import { Router } from "express";

import { getCategories } from "../controllers/categoriesController.js";

//import {[validation]} from "../middlewares/categorieValidation.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);

export default categoriesRouter;