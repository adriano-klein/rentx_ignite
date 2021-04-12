import { Router } from "express";

import { CreateSpecificationsController } from "../modules/car/useCases/CreateSpecifications/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationsControler = new CreateSpecificationsController();

specificationRoutes.post("/", createSpecificationsControler.handle);

export { specificationRoutes };
