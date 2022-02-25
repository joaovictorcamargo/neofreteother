"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.listen(process.env.PORT || 3000, function () { return console.log("Server is runing 🚀"); });
//# sourceMappingURL=server.js.map