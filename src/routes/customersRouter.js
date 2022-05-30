import { Router } from "express";

import { getCustomers, getCustomersId, /*postCustomers, updateCustomers*/ } from "../controllers/customersController.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomersId);
//customersRouter.post("/customers", postCustomer);
//customersRouter.put("/customers", updateCustomer);


export default customersRouter;