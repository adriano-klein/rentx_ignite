import { CategoriesRespository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

const listCategoryRepository = null;
const listCategoryUseCase = new ListCategoriesUseCase(listCategoryRepository);
const listCategoryController = new ListCategoriesController(
  listCategoryUseCase
);

export { listCategoryController };
