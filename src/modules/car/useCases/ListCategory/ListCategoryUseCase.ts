import { inject, injectable } from "tsyringe";

import { Category } from "@modules/car/infra/typeorm/entities/Category";
import { ICategoryRepository } from "@modules/car/repositories/ICategoryRespository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRespositories: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRespositories.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
