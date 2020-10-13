"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var routesFrontend = express_1.Router();
routesFrontend.get("/Signin", function (req, res) {
    res.sendFile(path_1.default.resolve("public", "index.html"));
});
routesFrontend.get("/ForgoutPassword", function (req, res) {
    res.sendFile(path_1.default.resolve("public", "index.html"));
});
routesFrontend.get("/UserRegistration", function (req, res) {
    res.sendFile(path_1.default.resolve("public", "index.html"));
});
routesFrontend.get("/Dashboard", function (req, res) {
    res.sendFile(path_1.default.resolve("public", "index.html"));
});
exports.default = routesFrontend;
