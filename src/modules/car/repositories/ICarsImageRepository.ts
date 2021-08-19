import { CarImages } from "../infra/typeorm/entities/CarImages";

interface ICarsImageRepository {
  create(car_id: string, id: string): Promise<CarImages>;
}

export { ICarsImageRepository };
