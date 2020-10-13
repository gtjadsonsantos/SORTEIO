"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BusinessControllers_1 = __importDefault(require("../controllers/BusinessControllers"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeBusiness = express_1.Router();
routeBusiness.get("/business/:businnes_id", BusinessControllers_1.default.indexOne);
routeBusiness.get("/business", BusinessControllers_1.default.indexAll);
routeBusiness.post("/business", validateUserType_1.default, BusinessControllers_1.default.create);
routeBusiness.put("/business", validateUserType_1.default, BusinessControllers_1.default.update);
routeBusiness.delete("/business", validateUserType_1.default, BusinessControllers_1.default.delete);
exports.default = routeBusiness;
