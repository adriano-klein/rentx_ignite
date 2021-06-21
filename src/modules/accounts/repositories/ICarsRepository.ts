import { ICreateCarDTO } from "@modules/car/dtos/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository };
