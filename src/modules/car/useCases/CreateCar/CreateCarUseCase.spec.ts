import { CarsRepositoryInMemory } from "@modules/car/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarUseCase } from "./CreatecarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it("Should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "name car",
      description: "description car",
      daily_rate: 100,
      licence_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });
  });
});
