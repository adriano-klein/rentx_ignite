import { SpecificationRepository } from "@modules/car/infra/typeorm/repositories/SpecificationRepository";
import { ICarsRespository } from "@modules/car/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/car/repositories/ISpecificationRepository";
import { AppError } from "@shared/infra/errors/AppError";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    private carsRepository: ICarsRespository,
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Cars does not exists");
    }

    const specifications = await this.specificationRepository.findByIds(
      specifications_id
    );

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);
  }
}

export { CreateCarSpecificationUseCase };
