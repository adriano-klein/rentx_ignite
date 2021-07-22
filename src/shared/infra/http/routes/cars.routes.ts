import { Router } from "express";

import { CreateCarController } from "@modules/car/useCases/CreateCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/car/useCases/ListAvailableCars/ListAvailableCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoute = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoute.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoute.get("/available", listAvailableCarsController.handle);

export { carsRoute };
