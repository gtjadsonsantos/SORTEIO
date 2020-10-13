"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeUsers = express_1.Router();
routeUsers.get("/user/:user_id", validateUserType_1.default, UserControllers_1.default.indexOne);
routeUsers.get("/users", validateUserType_1.default, UserControllers_1.default.indexAll);
routeUsers.post("/user", UserControllers_1.default.create);
routeUsers.put("/user", validateJWT_1.default, UserControllers_1.default.update);
routeUsers.delete("/user", validateUserType_1.default, UserControllers_1.default.delete);
exports.default = routeUsers;
