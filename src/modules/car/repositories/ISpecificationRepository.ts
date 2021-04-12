import { Specifications } from "../entities/Specifications";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByBame(name: string): Promise<Specifications>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
