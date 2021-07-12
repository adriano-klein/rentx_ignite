import { ICreateCarDTO } from "@modules/car/dtos/ICreateCarDTO";

import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicencePlate(licence_plate: string): Promise<Car>;
}

export { ICarsRepository };
