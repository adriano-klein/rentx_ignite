import { ICategoryRepository } from "../../repositories/ICategoryRespository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRespositories: ICategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRespositories.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRespositories.create({ name, description });
  }
}

export { CreateCategoryUseCase };
