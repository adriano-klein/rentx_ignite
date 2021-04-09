import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRespository";

class ListCategoriesUseCase {
  constructor(private categoriesRespositories: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRespositories.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
