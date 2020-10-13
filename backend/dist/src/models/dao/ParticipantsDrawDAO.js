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
var Participants_DrawVO_1 = __importDefault(require("../vo/Participants_DrawVO"));
exports.default = {
    indexOne: function (participant_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listParticipants_DrawVO, listParticipants_Draw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listParticipants_DrawVO = [];
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .select("*")
                                .where("participant_id", "=", "" + participant_DrawVO.getParticipant_id())
                                .where("deleted_at", null)];
                    case 1:
                        listParticipants_Draw = _a.sent();
                        listParticipants_Draw.forEach(function (item) {
                            var participants_Draw = new Participants_DrawVO_1.default();
                            participants_Draw.setParticipant_id(item.participant_id);
                            participants_Draw.setCreated_at(item.created_at);
                            participants_Draw.setDeleted_at(item.deleted_at);
                            participants_Draw.setDraw_quotas_draw_quota_id(item.draw_quotas_draw_quota_id);
                            participants_Draw.setUsers_user_id(item.users_user_id);
                            participants_Draw.setDraws_draw_id(item.draws_draw_id);
                            participants_Draw.setStatus(item.status);
                            listParticipants_DrawVO.push(participants_Draw);
                        });
                        return [2 /*return*/, listParticipants_DrawVO];
                }
            });
        });
    },
    indexAllJoinDrawsQuotasParticipants: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default.raw("  \n    SELECT\n      draws.draw_id,\n      participants_draw.participant_id,\n      draw_quotas.draw_quota_id,\n      participants_draw.created_at,\n      users.name,\n      participants_draw.status,\n      draw_quotas.number,\n      draws.value\n    FROM draws \n      INNER JOIN participants_draw ON draws.draw_id = participants_draw.draws_draw_id\n      RIGHT JOIN draw_quotas ON draw_quotas.draw_quota_id  = participants_draw.draw_quotas_draw_quota_id   \n      INNER JOIN users ON users.user_id = participants_draw.users_user_id\n    WHERE \n\t    draws.draw_id = " + req.query.draw_id + " and \n      draws.status = \"active\" and\n      draws.deleted_at is null and\n      draw_quotas.deleted_at is null and\n      participants_draw.deleted_at is null    \n    ")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    },
    indexAllJoinDrawsQuotasParticipantsByUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default.raw("  \n    SELECT\n      draws.draw_id,\n      participants_draw.participant_id,\n      draw_quotas.draw_quota_id,\n      participants_draw.created_at,\n      users.name,\n      draws.title,\n      draws.subtitle,\n      participants_draw.status,\n      draw_quotas.number,\n      draws.value\n    FROM draws \n      INNER JOIN participants_draw ON draws.draw_id = participants_draw.draws_draw_id\n      RIGHT JOIN draw_quotas ON draw_quotas.draw_quota_id  = participants_draw.draw_quotas_draw_quota_id   \n      INNER JOIN users ON users.user_id = participants_draw.users_user_id\n    WHERE \n\t    participants_draw.users_user_id = " + req.params.user_id + " and  \n      draws.deleted_at is null and\n      draw_quotas.deleted_at is null and\n      participants_draw.deleted_at is null")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    },
    indexAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var listParticipants_DrawVO, listParticipants_Draw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listParticipants_DrawVO = [];
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .select("*")
                                .where("deleted_at", null)];
                    case 1:
                        listParticipants_Draw = _a.sent();
                        listParticipants_Draw.forEach(function (item) {
                            var participants_Draw = new Participants_DrawVO_1.default();
                            participants_Draw.setParticipant_id(item.participant_id);
                            participants_Draw.setCreated_at(item.created_at);
                            participants_Draw.setDeleted_at(item.deleted_at);
                            participants_Draw.setDraw_quotas_draw_quota_id(item.draw_quotas_draw_quota_id);
                            participants_Draw.setUsers_user_id(item.users_user_id);
                            participants_Draw.setDraws_draw_id(item.draws_draw_id);
                            participants_Draw.setStatus(item.status);
                            listParticipants_DrawVO.push(participants_Draw);
                        });
                        return [2 /*return*/, listParticipants_DrawVO];
                }
            });
        });
    },
    create: function (participant_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var responseUsers, responseDraws, responseDrawQuotas, responseParticipants, responseDAO, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, conn_1.default("users")
                                .select("*")
                                .where("user_id", "=", "" + participant_DrawVO.getUsers_user_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 1:
                        responseUsers = _a.sent();
                        return [4 /*yield*/, conn_1.default("draws")
                                .select("*")
                                .where("draw_id", "=", "" + participant_DrawVO.getDraws_draw_id())
                                .where("status", "=", "active")
                                .where("deleted_at", null)
                                .limit(1)];
                    case 2:
                        responseDraws = _a.sent();
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .select("*")
                                .where("draw_quota_id", "=", "" + participant_DrawVO.getDraw_quotas_draw_quota_id())
                                .where("deleted_at", null)];
                    case 3:
                        responseDrawQuotas = _a.sent();
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .select("*")
                                .innerJoin("draws", "participants_draw.draws_draw_id", "draws.draw_id")
                                .where("draws.status", "=", "active")
                                .where("participants_draw.draws_draw_id", "=", "" + participant_DrawVO.getDraws_draw_id())
                                .where("participants_draw.draw_quotas_draw_quota_id", "=", "" + participant_DrawVO.getDraw_quotas_draw_quota_id())
                                .where("participants_draw.deleted_at", null)];
                    case 4:
                        responseParticipants = _a.sent();
                        responseDAO = false;
                        if (!(responseUsers.length >= 1 &&
                            responseDraws.length >= 1 &&
                            responseDrawQuotas.length >= 1 &&
                            responseParticipants.length == 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, conn_1.default("participants_draw").insert({
                                draw_quotas_draw_quota_id: participant_DrawVO.getDraw_quotas_draw_quota_id(),
                                users_user_id: participant_DrawVO.getUsers_user_id(),
                                draws_draw_id: participant_DrawVO.getDraws_draw_id(),
                                status: participant_DrawVO.getStatus(),
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
    update: function (participant_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var responseUsers, responseDraws, responseDrawQuotas, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, conn_1.default("users")
                                .select("*")
                                .where("user_id", "=", "" + participant_DrawVO.getUsers_user_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 1:
                        responseUsers = _a.sent();
                        return [4 /*yield*/, conn_1.default("draws")
                                .select("*")
                                .where("draw_id", "=", "" + participant_DrawVO.getDraws_draw_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 2:
                        responseDraws = _a.sent();
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .select("*")
                                .where("draw_quota_id", "=", "" + participant_DrawVO.getDraw_quotas_draw_quota_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 3:
                        responseDrawQuotas = _a.sent();
                        response = false;
                        if (!(responseUsers.length >= 1 &&
                            responseDraws.length >= 1 &&
                            responseDrawQuotas.length >= 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .update({
                                draw_quotas_draw_quota_id: participant_DrawVO.getDraw_quotas_draw_quota_id(),
                                users_user_id: participant_DrawVO.getUsers_user_id(),
                                draws_draw_id: participant_DrawVO.getDraws_draw_id(),
                                status: participant_DrawVO.getStatus(),
                            })
                                .where("participant_id", "=", "" + participant_DrawVO.getParticipant_id())
                                .where("deleted_at", null)];
                    case 4:
                        _a.sent();
                        response = true;
                        _a.label = 5;
                    case 5: return [2 /*return*/, response];
                    case 6:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (participant_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var responseUsers, responseDraws, responseDrawQuotas, responseDAO, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, conn_1.default("users")
                                .select("*")
                                .where("user_id", "=", "" + participant_DrawVO.getUsers_user_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 1:
                        responseUsers = _a.sent();
                        return [4 /*yield*/, conn_1.default("draws")
                                .select("*")
                                .where("draw_id", "=", "" + participant_DrawVO.getDraws_draw_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 2:
                        responseDraws = _a.sent();
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .select("*")
                                .where("draw_quota_id", "=", "" + participant_DrawVO.getDraw_quotas_draw_quota_id())
                                .where("deleted_at", null)
                                .limit(1)];
                    case 3:
                        responseDrawQuotas = _a.sent();
                        responseDAO = false;
                        if (!(responseUsers.length >= 1 &&
                            responseDraws.length >= 1 &&
                            responseDrawQuotas.length >= 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, conn_1.default("participants_draw")
                                .update({
                                deleted_at: new Date(),
                            })
                                .where("participant_id", "=", "" + participant_DrawVO.getParticipant_id())
                                .where("deleted_at", null)];
                    case 4:
                        response = _a.sent();
                        responseDAO = response == 1 ? true : false;
                        _a.label = 5;
                    case 5: return [2 /*return*/, responseDAO];
                    case 6:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
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