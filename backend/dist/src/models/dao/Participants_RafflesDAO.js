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
var conn_1 = __importDefault(require("../../database/conn"));
var Participants_RuffleVO_1 = __importDefault(require("../vo/Participants_RuffleVO"));
exports.default = {
    indexOne: function (participant_ruffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listParticipants_RuffleVO, listParticipants_Ruffle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listParticipants_RuffleVO = [];
                        return [4 /*yield*/, conn_1.default("participants_raffle")
                                .select("*")
                                .where("participant_id", "=", "" + participant_ruffleVO.getParticipant_id())
                                .where("deleted_at", null)];
                    case 1:
                        listParticipants_Ruffle = _a.sent();
                        listParticipants_Ruffle.forEach(function (item) {
                            var participant_ruffle = new Participants_RuffleVO_1.default();
                            participant_ruffle.setParticipant_id(item.participant_id);
                            participant_ruffle.setCreated_at(item.created_at);
                            participant_ruffle.setDeleted_at(item.deleted_at);
                            participant_ruffle.setQuotas_raffle_quota_raffle_id(item.quotas_raffle_quota_raffle_id);
                            participant_ruffle.setUsers_user_id(item.users_user_id);
                            participant_ruffle.setRaffles_raffle_id(item.raffles_raffle_id);
                            participant_ruffle.setStatus(item.status);
                            listParticipants_RuffleVO.push(participant_ruffle);
                        });
                        return [2 /*return*/, listParticipants_RuffleVO];
                }
            });
        });
    },
    indexAllJoinRafflesQuotasParticipants: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default.raw("\n    SELECT\n      raffles.raffle_id,\n      participants_raffle.participant_id,\n      participants_raffle.created_at,\n      quotas_raffle.quota_raffle_id,\n      users.name,\n      participants_raffle.status,\n      quotas_raffle.number,\n      raffles.value\n    FROM raffles \n      INNER JOIN participants_raffle ON raffles.raffle_id = participants_raffle.raffles_raffle_id\n      RIGHT JOIN quotas_raffle ON quotas_raffle.quota_raffle_id  = participants_raffle.quotas_raffle_quota_raffle_id   \n      INNER JOIN users ON users.user_id = participants_raffle.users_user_id\n    WHERE \n      raffles.raffle_id = " + req.query.raffle_id + " and \n      raffles.status = \"active\" and\n      raffles.deleted_at is null and\n      quotas_raffle.deleted_at is null and\n      participants_raffle.deleted_at is null\n    ")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    },
    indexAllJoinRafflesQuotasParticipantsByUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default.raw("\n    SELECT\n    raffles.raffle_id,\n    participants_raffle.participant_id,\n    participants_raffle.created_at,\n    quotas_raffle.quota_raffle_id,\n    users.name,\n    raffles.title,\n    raffles.subtitle,\n    participants_raffle.status,\n    quotas_raffle.number,\n    raffles.value\n  FROM raffles \n    INNER JOIN participants_raffle ON raffles.raffle_id = participants_raffle.raffles_raffle_id\n    RIGHT JOIN quotas_raffle ON quotas_raffle.quota_raffle_id  = participants_raffle.quotas_raffle_quota_raffle_id   \n    INNER JOIN users ON users.user_id = participants_raffle.users_user_id\n  WHERE \n    participants_raffle.users_user_id = " + req.params.user_id + " and  \n    raffles.deleted_at is null and\n    quotas_raffle.deleted_at is null and\n    participants_raffle.deleted_at is null\n    ")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    },
    indexAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var listParticipants_RuffleVO, listParticipants_Ruffle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listParticipants_RuffleVO = [];
                        return [4 /*yield*/, conn_1.default("participants_raffle")
                                .select("*")
                                .where("deleted_at", null)];
                    case 1:
                        listParticipants_Ruffle = _a.sent();
                        listParticipants_Ruffle.forEach(function (item) {
                            var participant_ruffle = new Participants_RuffleVO_1.default();
                            participant_ruffle.setParticipant_id(item.participant_id);
                            participant_ruffle.setCreated_at(item.created_at);
                            participant_ruffle.setDeleted_at(item.deleted_at);
                            participant_ruffle.setQuotas_raffle_quota_raffle_id(item.quotas_raffle_quota_raffle_id);
                            participant_ruffle.setUsers_user_id(item.users_user_id);
                            participant_ruffle.setRaffles_raffle_id(item.raffles_raffle_id);
                            participant_ruffle.setStatus(item.status);
                            listParticipants_RuffleVO.push(participant_ruffle);
                        });
                        return [2 /*return*/, listParticipants_RuffleVO];
                }
            });
        });
    },
    create: function (participant_ruffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var responseUsers, responseRuffles, responseRafflesQuotas, responseParticipantsRaffles, responseDAO, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .select("*")
                                .where("users_user_id", "=", "" + participant_ruffleVO.getUsers_user_id())
                                .where("status", "=", "sold")
                                .where("deleted_at", null)
                                .limit(1)];
                    case 1:
                        responseUsers = _a.sent();
                        return [4 /*yield*/, conn_1.default("raffles")
                                .select("*")
                                .where("raffle_id", "=", "" + participant_ruffleVO.getRaffles_raffle_id())
                                .where("status", "=", "active")
                                .where("deleted_at", null)
                                .limit(1)];
                    case 2:
                        responseRuffles = _a.sent();
                        return [4 /*yield*/, conn_1.default("quotas_raffle")
                                .select("*")
                                .where("quota_raffle_id", "=", "" + participant_ruffleVO.getQuotas_raffle_quota_raffle_id())
                                .where("deleted_at", null)];
                    case 3:
                        responseRafflesQuotas = _a.sent();
                        return [4 /*yield*/, conn_1.default("participants_raffle")
                                .select("*")
                                .innerJoin("raffles", "participants_raffle.raffles_raffle_id", "raffles.raffle_id")
                                .where("raffles.status", "=", "active")
                                .where("participants_raffle.raffles_raffle_id", "=", "" + participant_ruffleVO.getRaffles_raffle_id())
                                .where("participants_raffle.quotas_raffle_quota_raffle_id", "=", "" + participant_ruffleVO.getQuotas_raffle_quota_raffle_id())
                                .where("participants_raffle.deleted_at", null)];
                    case 4:
                        responseParticipantsRaffles = _a.sent();
                        responseDAO = false;
                        if (!(responseUsers.length >= 1 &&
                            responseRuffles.length >= 1 &&
                            responseRafflesQuotas.length >= 1 &&
                            responseParticipantsRaffles.length == 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, conn_1.default("participants_raffle").insert({
                                quotas_raffle_quota_raffle_id: participant_ruffleVO.getQuotas_raffle_quota_raffle_id(),
                                users_user_id: participant_ruffleVO.getUsers_user_id(),
                                raffles_raffle_id: participant_ruffleVO.getRaffles_raffle_id(),
                                status: participant_ruffleVO.getStatus(),
                            })];
                    case 5:
                        _a.sent();
                        responseDAO = true;
                        _a.label = 6;
                    case 6: return [2 /*return*/, responseDAO];
                    case 7:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 8: return [2 /*return*/];
                }
            });
        });
    },
    update: function (participant_ruffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var responseUsers, responseRuffles, responseRafflesQuotas, responseDAO, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .select("*")
                                .where("users_user_id", "=", "" + participant_ruffleVO.getUsers_user_id())
                                .where("status", "=", "sold")
                                .where("deleted_at", null)
                                .limit(1)];
                    case 1:
                        responseUsers = _a.sent();
                        return [4 /*yield*/, conn_1.default("raffles")
                                .select("*")
                                .where("raffle_id", "=", "" + participant_ruffleVO.getRaffles_raffle_id())
                                .where("status", "=", "active")
                                .where("deleted_at", null)
                                .limit(1)];
                    case 2:
                        responseRuffles = _a.sent();
                        return [4 /*yield*/, conn_1.default("quotas_raffle")
                                .select("*")
                                .where("quota_raffle_id", "=", "" + participant_ruffleVO.getQuotas_raffle_quota_raffle_id())
                                .where("deleted_at", null)];
                    case 3:
                        responseRafflesQuotas = _a.sent();
                        responseDAO = false;
                        if (!(responseUsers.length >= 1 &&
                            responseRuffles.length >= 1 &&
                            responseRafflesQuotas.length >= 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, conn_1.default("participants_raffle")
                                .update({
                                quotas_raffle_quota_raffle_id: participant_ruffleVO.getQuotas_raffle_quota_raffle_id(),
                                users_user_id: participant_ruffleVO.getUsers_user_id(),
                                raffles_raffle_id: participant_ruffleVO.getRaffles_raffle_id(),
                                status: participant_ruffleVO.getStatus(),
                            })
                                .where("participant_id", "=", "" + participant_ruffleVO.getParticipant_id())
                                .where("deleted_at", null)];
                    case 4:
                        response = _a.sent();
                        responseDAO = response == 1 ? true : false;
                        _a.label = 5;
                    case 5: return [2 /*return*/, responseDAO];
                    case 6:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (participant_ruffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var responseDAO, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        responseDAO = false;
                        return [4 /*yield*/, conn_1.default("participants_raffle")
                                .update({ deleted_at: new Date() })
                                .where("participant_id", "=", "" + participant_ruffleVO.getParticipant_id())
                                .where("deleted_at", null)];
                    case 1:
                        response = _a.sent();
                        responseDAO = response == 1 ? true : false;
                        return [2 /*return*/, responseDAO];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    updateStatusResevation: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    },
};
