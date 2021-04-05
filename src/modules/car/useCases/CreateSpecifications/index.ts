import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationsUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationsController(
  createSpecificationUseCase
);

export { createSpecificationController };
