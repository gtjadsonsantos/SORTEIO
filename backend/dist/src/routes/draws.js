"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DrawControllers_1 = __importDefault(require("../controllers/DrawControllers"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeDraws = express_1.Router();
routeDraws.get("/draw/:draw_id", DrawControllers_1.default.indexOne);
routeDraws.get("/draws", DrawControllers_1.default.indexAll);
routeDraws.get("/joindrawsimages", DrawControllers_1.default.indexAllJoinDrawsImages);
routeDraws.post("/draw", validateUserType_1.default, DrawControllers_1.default.create);
routeDraws.put("/draw", validateUserType_1.default, DrawControllers_1.default.update);
routeDraws.delete("/draw", validateUserType_1.default, DrawControllers_1.default.delete);
exports.default = routeDraws;
