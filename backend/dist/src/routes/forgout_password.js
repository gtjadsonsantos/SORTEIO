"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ForgoutPasswordControllers_1 = __importDefault(require("../controllers/ForgoutPasswordControllers"));
var routeFourgoutPassword = express_1.Router();
routeFourgoutPassword.post("/forgout_password", ForgoutPasswordControllers_1.default.indexOne);
exports.default = routeFourgoutPassword;
