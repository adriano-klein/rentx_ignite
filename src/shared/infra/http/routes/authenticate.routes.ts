import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/useCases/autenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();
const authenticaUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticaUserController.handle);

export { authenticateRoutes };
