import { Specifications } from "../model/Specifications";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByBame(name: string): Specifications;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
