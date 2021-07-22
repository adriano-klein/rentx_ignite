import { CarsRepositoryInMemory } from "@modules/car/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Audi",
      category_id: "1ace80b0-1494-42f0-afff-b894101e1cf8",
      daily_rate: 140,
      description: "Carro legal",
      fine_amount: 140,
      name: "Audi A3",
      licence_plate: "ABCe-123",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "AudiTT",
      category_id: "1ace80b0-1494-42f0-afff-b894101e1cf8",
      daily_rate: 140,
      description: "Carro legal",
      fine_amount: 140,
      licence_plate: "ABCe-123",
      name: "Audi A3",
    });
    const cars = await listCarsUseCase.execute({
      brand: "AudiTT",
    });

    expect(cars).toEqual([car]);
  });
});
