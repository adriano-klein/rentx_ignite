import { container } from "tsyringe";

import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { ICarsRepository } from "@modules/accounts/repositories/ICarsRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { CarsImagesRepository } from "@modules/car/infra/typeorm/repositories/CarsImagesRepository";
import { CarsRepository } from "@modules/car/infra/typeorm/repositories/CarsRepository";
import { CategoriesRespository } from "@modules/car/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "@modules/car/infra/typeorm/repositories/SpecificationRepository";
import { ICarsImagesRepository } from "@modules/car/repositories/ICarsImagesRepository";
import { ICategoryRepository } from "@modules/car/repositories/ICategoryRespository";
import { ISpecificationRepository } from "@modules/car/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRespository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UsersRepository", UserRepository);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepository",
  CarsImagesRepository
);
