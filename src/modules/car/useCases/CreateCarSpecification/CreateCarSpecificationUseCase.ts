import { ICarsRespository } from "@modules/car/repositories/ICarsRepository";
import { AppError } from "@shared/infra/errors/AppError";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(private carsRepository: ICarsRespository) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Cars does not exists");
    }
  }
}

export { CreateCarSpecificationUseCase };
