"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserVO_1 = __importDefault(require("../vo/UserVO"));
var conn_1 = __importDefault(require("../../database/conn"));
var Cripto_1 = require("../../utils/Cripto");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../../config"));
exports.default = {
    indexOne: function (userVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listUserVO, listUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listUserVO = [];
                        return [4 /*yield*/, conn_1.default("users")
                                .select("*")
                                .where("user_id", "=", "" + userVO.getUser_id())
                                .where("deleted_at", null)];
                    case 1:
                        listUser = _a.sent();
                        listUser.forEach(function (item) {
                            var user = new UserVO_1.default();
                            user.setUser_id(item.user_id);
                            user.setName(item.name);
                            user.setCpf(item.cpf);
                            user.setPhone(item.phone);
                            user.setType(item.type);
                            user.setEmail(item.email);
                            user.setCreated_at(item.created_at);
                            user.setDeleted_at(item.deleted_at);
                            user.setAddress(item.address);
                            listUserVO.push(user);
                        });
                        return [2 /*return*/, listUserVO];
                }
            });
        });
    },
    indexAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var listUserVO, listUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listUserVO = [];
                        return [4 /*yield*/, conn_1.default("users")
                                .select("*")
                                .where("deleted_at", null)];
                    case 1:
                        listUser = _a.sent();
                        listUser.forEach(function (item) {
                            var user = new UserVO_1.default();
                            user.setUser_id(item.user_id);
                            user.setName(item.name);
                            user.setCpf(item.cpf);
                            user.setPhone(item.phone);
                            user.setType(item.type);
                            user.setEmail(item.email);
                            user.setCreated_at(item.created_at);
                            user.setDeleted_at(item.deleted_at);
                            user.setAddress(item.address);
                            listUserVO.push(user);
                        });
                        return [2 /*return*/, listUserVO];
                }
            });
        });
    },
    create: function (userVO) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default("users").insert({
                            name: userVO.getName(),
                            cpf: userVO.getCpf(),
                            email: userVO.getEmail(),
                            phone: userVO.getPhone(),
                            password: Cripto_1.encrypt("" + userVO.getPassword()),
                            type: userVO.getType(),
                            address: userVO.getAddress(),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    findOne: function (userVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default("users")
                            .select("*")
                            .where("cpf", "=", "" + userVO.getCpf())
                            .orWhere("email", "=", "" + userVO.getEmail())
                            .where("deleted_at", null)];
                    case 1:
                        listUser = _a.sent();
                        return [2 /*return*/, listUser.length > 0 ? true : false];
                }
            });
        });
    },
    update: function (userVO, req) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var token, decode, dataUser, response, responseDatabase;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                        decode = jsonwebtoken_1.default.verify(token, config_1.default.hashjwt);
                        dataUser = decode.dataUser;
                        response = false;
                        if (!(dataUser[0].user_id == userVO.getUser_id())) return [3 /*break*/, 2];
                        return [4 /*yield*/, conn_1.default("users")
                                .update({
                                name: userVO.getName(),
                                cpf: userVO.getCpf(),
                                email: userVO.getEmail(),
                                phone: userVO.getPhone(),
                                password: Cripto_1.encrypt("" + userVO.getPassword()),
                                type: dataUser[0].type,
                                address: userVO.getAddress(),
                            })
                                .where("user_id", "=", "" + userVO.getUser_id())];
                    case 1:
                        responseDatabase = _b.sent();
                        response = responseDatabase == 1 ? true : false;
                        _b.label = 2;
                    case 2: return [2 /*return*/, response];
                }
            });
        });
    },
    delete: function (userVO) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default("users")
                            .where("cpf", "=", "" + userVO.getCpf())
                            .where("email", "=", "" + userVO.getEmail())
                            .where("password", "=", Cripto_1.encrypt("" + userVO.getPassword()))
                            .where("user_id", "=", "" + userVO.getUser_id())
                            .update({
                            deleted_at: new Date(),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    indexOneByCpf: function (userVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listUserVO, listUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listUserVO = [];
                        return [4 /*yield*/, conn_1.default("users")
                                .select("*")
                                .where("cpf", "=", "" + userVO.getCpf())
                                .where("email", "=", "" + userVO.getEmail())
                                .where("deleted_at", null)];
                    case 1:
                        listUser = _a.sent();
                        listUser.forEach(function (item) {
                            var user = new UserVO_1.default();
                            user.setUser_id(item.user_id);
                            user.setName(item.name);
                            user.setCpf(item.cpf);
                            user.setPhone(item.phone);
                            user.setPassword(item.password);
                            user.setType(item.type);
                            user.setEmail(item.email);
                            user.setCreated_at(item.created_at);
                            user.setDeleted_at(item.deleted_at);
                            user.setAddress(item.address);
                            listUserVO.push(user);
                        });
                        return [2 /*return*/, listUserVO];
                }
            });
        });
    },
};
