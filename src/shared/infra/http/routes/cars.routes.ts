import { Router } from "express";

import { CreateCarController } from "@modules/car/useCases/CreateCar/CreateCarController";

const carsRoute = Router();

const createCarController = new CreateCarController();

carsRoute.post("/", createCarController.handle);

export { carsRoute };
