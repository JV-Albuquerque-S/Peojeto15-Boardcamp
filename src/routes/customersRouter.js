import { Router } from "express";

import { getCustomers, getCustomersId, postCustomers, putCustomers } from "../controllers/customersController.js";
import { customerValidation } from "../middelwares/customerMiddleware.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomersId);
customersRouter.post("/customers", customerValidation, postCustomers);
customersRouter.put("/customers/:id", customerValidation, putCustomers);


export default customersRouter;