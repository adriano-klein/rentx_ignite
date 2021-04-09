import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/car/useCases/CreateCategory";
import { importCategoryController } from "../modules/car/useCases/ImportCategoryController";
import { listCategoryController } from "../modules/car/useCases/ListCategory";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
