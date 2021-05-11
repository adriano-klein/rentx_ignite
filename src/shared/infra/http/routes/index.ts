import { Router } from "express";

import { authenticateRoutes } from "./authenticateRoutes";
import { categoriesRoutes } from "./categoriesRoutes";
import { specificationRoutes } from "./specificationRoutes";
import { userRoutes } from "./usersRoutes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);
router.use(authenticateRoutes); // Não coloquei o path, pois quero que somente o / direcione para esta rota

export { router };
