import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/car/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/car/useCases/ImportCategoryController/ImportCategoryController";
import { ListCategoriesController } from "../modules/car/useCases/ListCategory/ListCategoriesController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
