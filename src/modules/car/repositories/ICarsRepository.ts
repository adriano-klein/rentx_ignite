import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRespository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicencePlate(license_plate: string): Promise<Car>;
}

export { ICarsRespository };
