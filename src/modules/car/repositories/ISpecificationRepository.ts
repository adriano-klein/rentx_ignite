import { Specifications } from "../infra/typeorm/entities/Specifications";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByBame(name: string): Promise<Specifications>;
  findByIds(id: string[]): Promise<Specifications[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
