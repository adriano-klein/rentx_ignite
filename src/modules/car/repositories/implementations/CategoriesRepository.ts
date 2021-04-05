import { Category } from "../../model/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategoryRespository";

class CategoriesRespository implements ICategoryRepository {
  private categories: Category[];

  // padrão singleton
  private static INSTANCE: CategoriesRespository;

  // colocar o private na frente para que não seja possível mais usar instanciar
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRespository {
    if (!CategoriesRespository.INSTANCE) {
      CategoriesRespository.INSTANCE = new CategoriesRespository();
    }
    return CategoriesRespository.INSTANCE;
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRespository };
