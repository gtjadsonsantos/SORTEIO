"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoginControllers_1 = __importDefault(require("../controllers/LoginControllers"));
var routeLogin = express_1.Router();
routeLogin.post("/login", LoginControllers_1.default.create);
exports.default = routeLogin;
