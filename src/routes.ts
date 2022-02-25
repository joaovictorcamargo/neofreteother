import { Router } from "express";
/* import auth from "./middlewares/ensureAuthenticateClient";
 
 */
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { ForgotClientController } from "./modules/account/ForgotPassword/ForgotPasswordController";
import { CreateCarryingController } from "./modules/carryings/useCases/CreateCarrying/CreateCarryingController";
import { DeleteCarryingController } from "./modules/carryings/useCases/DeleteCarrying/DeleteCarryingController";
import { GetCarryingController } from "./modules/carryings/useCases/GetCarrying/GetCarryingController";
import { UpdateCarryingController } from "./modules/carryings/useCases/UpdateCarrying/UpdateCarryingController";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreateClientController";
import { GetClientController } from "./modules/clients/useCases/GetClient/GetClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createCarryingController = new CreateCarryingController();
const getCarryingController = new GetCarryingController();
const deleteCarryingController = new DeleteCarryingController();
const updateCarryingController = new UpdateCarryingController();
const getClientController = new GetClientController();
const forgotClientController = new ForgotClientController();

routes.post("/client/", createClientController.handle);

//forgot
routes.post("/forgot-password", forgotClientController.handle);

routes.get(
  "/carrying/",
  ensureAuthenticateClient,
  getCarryingController.findAll
);
routes.post("/authenticate", authenticateClientController.handle);

routes.post(
  "/carrying/",
  ensureAuthenticateClient,
  createCarryingController.handle
);
routes.get(
  "/client/:id",
  ensureAuthenticateClient,
  getClientController.findOne
);
routes.get("/client/", ensureAuthenticateClient, getClientController.findAll);

routes.get(
  "/carrying/:id",
  ensureAuthenticateClient,
  getCarryingController.findOne
);

routes.delete(
  "/:id",
  ensureAuthenticateClient,
  deleteCarryingController.handle
);

routes.put("/:id", ensureAuthenticateClient, updateCarryingController.handle);

export { routes };
