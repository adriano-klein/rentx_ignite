import { Car } from "@modules/accounts/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/accounts/repositories/ICarsRepository";
import { ICreateCarDTO } from "@modules/car/dtos/ICreateCarDTO";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    name,
    licence_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      category_id,
      daily_rate,
      description,
      fine_amount,
      licence_plate,
      brand,
    });

    this.cars.push(car);
    return car;
  }

  async findByLicencePlate(licence_plate: string): Promise<Car> {
    return this.cars.find((car) => car.licence_plate === licence_plate);
  }
}

export { CarsRepositoryInMemory };
