// import { inject, injectable } from "tsyringe";

import { Car } from "@modules/accounts/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/accounts/repositories/ICarsRepository";
import { AppError } from "@shared/infra/errors/AppError";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  licence_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    licence_plate,
    fine_amount,
    brand,
    category_id,
  }: IRequest): Promise<Car> {
    const carAlreadyExists = this.carsRepository.findByLicencePlate(
      licence_plate
    );

    if (carAlreadyExists) {
      throw new AppError("Car already exists!");
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      licence_plate,
      fine_amount,
      brand,
      category_id,
    });

    return car;
  }
}

export { CreateCarUseCase };
