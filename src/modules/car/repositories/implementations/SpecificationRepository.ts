import { Specifications } from "../../model/Specifications";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specifications[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specifications();

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specifications);
  }

  findByBame(name: string): Specifications {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationRepository };
