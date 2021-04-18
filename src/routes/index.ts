import { Router } from "express";

import { categoriesRoutes } from "./categoriesRoutes";
import { specificationRoutes } from "./specificationRoutes";
import { userRoutes } from "./usersRoutes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);

export { router };
