import { ICreateCarDTO } from "@modules/car/dtos/ICreateCarDTO";
import { Car } from "@modules/car/infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicencePlate(licence_plate: string): Promise<Car>;
  findAvailable(): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
