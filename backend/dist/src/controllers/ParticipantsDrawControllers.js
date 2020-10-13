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
var ParticipantsDrawBO_1 = __importDefault(require("../models/bo/ParticipantsDrawBO"));
var ParticipantsDrawDAO_1 = __importDefault(require("../models/dao/ParticipantsDrawDAO"));
var Participants_DrawVO_1 = __importDefault(require("../models/vo/Participants_DrawVO"));
exports.default = {
    indexOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_id, participant_DrawVO, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        participant_id = req.params.participant_id;
                        participant_DrawVO = new Participants_DrawVO_1.default();
                        participant_DrawVO.setParticipant_id(participant_id);
                        return [4 /*yield*/, ParticipantsDrawBO_1.default.indexOne(participant_DrawVO)];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    indexAllJoinDrawsQuotasParticipants: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ParticipantsDrawDAO_1.default.indexAllJoinDrawsQuotasParticipants(req, res)];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    indexAllJoinDrawsQuotasParticipantsByUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ParticipantsDrawDAO_1.default.indexAllJoinDrawsQuotasParticipantsByUser(req, res)];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    indexAll: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ParticipantsDrawBO_1.default.indexAll()];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_draw, participant_DrawVO, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        participant_draw = req.body;
                        participant_DrawVO = new Participants_DrawVO_1.default();
                        participant_DrawVO.setDraw_quotas_draw_quota_id(participant_draw.draw_quotas_draw_quota_id);
                        participant_DrawVO.setUsers_user_id(participant_draw.users_user_id);
                        participant_DrawVO.setDraws_draw_id(participant_draw.draws_draw_id);
                        return [4 /*yield*/, ParticipantsDrawBO_1.default.create(participant_DrawVO)];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_draw, participant_DrawVO, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        participant_draw = req.body;
                        participant_DrawVO = new Participants_DrawVO_1.default();
                        participant_DrawVO.setParticipant_id(participant_draw.participant_id);
                        participant_DrawVO.setDraw_quotas_draw_quota_id(participant_draw.draw_quotas_draw_quota_id);
                        participant_DrawVO.setUsers_user_id(participant_draw.users_user_id);
                        participant_DrawVO.setDraws_draw_id(participant_draw.draws_draw_id);
                        participant_DrawVO.setStatus(participant_draw.status);
                        return [4 /*yield*/, ParticipantsDrawBO_1.default.update(participant_DrawVO)];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_draw, participant_DrawVO, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        participant_draw = req.body;
                        participant_DrawVO = new Participants_DrawVO_1.default();
                        participant_DrawVO.setParticipant_id(participant_draw.participant_id);
                        participant_DrawVO.setDraw_quotas_draw_quota_id(participant_draw.draw_quotas_draw_quota_id);
                        participant_DrawVO.setUsers_user_id(participant_draw.users_user_id);
                        participant_DrawVO.setDraws_draw_id(participant_draw.draws_draw_id);
                        return [4 /*yield*/, ParticipantsDrawBO_1.default.delete(participant_DrawVO)];
                    case 1:
                        response = _a.sent();
                        res.json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
};
