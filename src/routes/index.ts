import { Router } from "express";

import { categoriesRoutes } from "./categoriesRoutes";
import { specificationRoutes } from "./specificationRoutes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };
