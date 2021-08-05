import { getRepository, Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "@modules/car/repositories/ISpecificationRepository";

import { Specifications } from "../entities/Specifications";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }
  findByIds(id: string[]): Promise<Specifications[]> {
    throw new Error("Method not implemented.");
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByBame(name: string): Promise<Specifications> {
    const specification = this.repository.findOne({
      name,
    });
    return specification;
  }
}

export { SpecificationRepository };
