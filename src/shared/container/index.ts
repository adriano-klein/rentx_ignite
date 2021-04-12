import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/car/repositories/ICategoryRespository";
import { CategoriesRespository } from "../../modules/car/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRespository
);
