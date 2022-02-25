"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
/* import auth from "./middlewares/ensureAuthenticateClient";
 
 */
var ensureAuthenticateClient_1 = require("./middlewares/ensureAuthenticateClient");
var AuthenticateClientController_1 = require("./modules/account/authenticateClient/AuthenticateClientController");
var ForgotPasswordController_1 = require("./modules/account/ForgotPassword/ForgotPasswordController");
var CreateCarryingController_1 = require("./modules/carryings/useCases/CreateCarrying/CreateCarryingController");
var DeleteCarryingController_1 = require("./modules/carryings/useCases/DeleteCarrying/DeleteCarryingController");
var GetCarryingController_1 = require("./modules/carryings/useCases/GetCarrying/GetCarryingController");
var UpdateCarryingController_1 = require("./modules/carryings/useCases/UpdateCarrying/UpdateCarryingController");
var CreateClientController_1 = require("./modules/clients/useCases/CreateClient/CreateClientController");
var GetClientController_1 = require("./modules/clients/useCases/GetClient/GetClientController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var createClientController = new CreateClientController_1.CreateClientController();
var authenticateClientController = new AuthenticateClientController_1.AuthenticateClientController();
var createCarryingController = new CreateCarryingController_1.CreateCarryingController();
var getCarryingController = new GetCarryingController_1.GetCarryingController();
var deleteCarryingController = new DeleteCarryingController_1.DeleteCarryingController();
var updateCarryingController = new UpdateCarryingController_1.UpdateCarryingController();
var getClientController = new GetClientController_1.GetClientController();
var forgotClientController = new ForgotPasswordController_1.ForgotClientController();
routes.post("/client/", createClientController.handle);
//forgot
routes.post("/forgot-password", forgotClientController.handle);
routes.get("/carrying/", ensureAuthenticateClient_1.ensureAuthenticateClient, getCarryingController.findAll);
routes.post("/authenticate", authenticateClientController.handle);
routes.post("/carrying/", ensureAuthenticateClient_1.ensureAuthenticateClient, createCarryingController.handle);
routes.get("/client/:id", ensureAuthenticateClient_1.ensureAuthenticateClient, getClientController.findOne);
routes.get("/client/", ensureAuthenticateClient_1.ensureAuthenticateClient, getClientController.findAll);
routes.get("/carrying/:id", ensureAuthenticateClient_1.ensureAuthenticateClient, getCarryingController.findOne);
routes["delete"]("/:id", ensureAuthenticateClient_1.ensureAuthenticateClient, deleteCarryingController.handle);
routes.put("/:id", ensureAuthenticateClient_1.ensureAuthenticateClient, updateCarryingController.handle);
//# sourceMappingURL=routes.js.map