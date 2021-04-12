import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/car/useCases/CreateCategory/CreateCategoryController";
import { importCategoryController } from "../modules/car/useCases/ImportCategoryController";
import { listCategoryController } from "../modules/car/useCases/ListCategory";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const creacreCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", creacreCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
