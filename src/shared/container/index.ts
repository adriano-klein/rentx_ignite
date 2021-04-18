import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { ICategoryRepository } from "../../modules/car/repositories/ICategoryRespository";
import { CategoriesRespository } from "../../modules/car/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/car/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/car/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRespository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UsersRepository", UserRepository);
