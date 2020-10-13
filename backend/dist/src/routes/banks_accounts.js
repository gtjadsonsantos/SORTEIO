"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Bank_AccountControllers_1 = __importDefault(require("../controllers/Bank_AccountControllers"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeBankAccount = express_1.Router();
routeBankAccount.get("/banks_accounts/:bank_account_id", Bank_AccountControllers_1.default.indexOne);
routeBankAccount.get("/banks_accounts", Bank_AccountControllers_1.default.indexAll);
routeBankAccount.post("/bank_account", validateUserType_1.default, Bank_AccountControllers_1.default.create);
routeBankAccount.put("/bank_account", validateUserType_1.default, Bank_AccountControllers_1.default.update);
routeBankAccount.delete("/bank_account", validateUserType_1.default, Bank_AccountControllers_1.default.delete);
exports.default = routeBankAccount;
