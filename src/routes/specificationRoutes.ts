import { Router } from "express";

import { ensureAuthenticated } from "../middlaware/ensureAuthenticated";
import { CreateSpecificationsController } from "../modules/car/useCases/CreateSpecifications/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationsControler = new CreateSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationsControler.handle);

export { specificationRoutes };
