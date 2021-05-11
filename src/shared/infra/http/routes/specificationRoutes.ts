import { Router } from "express";

import { CreateSpecificationsController } from "@modules/car/useCases/CreateSpecifications/CreateSpecificationsController";

import { ensureAuthenticated } from "../ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationsControler = new CreateSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationsControler.handle);

export { specificationRoutes };
