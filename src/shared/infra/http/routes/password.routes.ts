import { Router } from "express";

import { SendForgottenPasswordMailController } from "@modules/accounts/useCases/sendForgottenPasswordMail/SendForgottenPasswordMailControoler";

const passwordRoutes = Router();

const sendForgottenPasswordMailController = new SendForgottenPasswordMailController();

passwordRoutes.post("/forgot", sendForgottenPasswordMailController.handle);

export { passwordRoutes };
