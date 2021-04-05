import { ICategoryRepository } from "../../repositories/ICategoryRespository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRespositories: ICategoryRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRespositories.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRespositories.create({ name, description });
  }
}

export { CreateCategoryUseCase };
