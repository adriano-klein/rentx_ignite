import { Car } from "@modules/accounts/infra/typeorm/entities/Car";

import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

interface ICarsRespository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicencePlate(license_plate: string): Promise<Car>;
}

export { ICarsRespository };
