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
var Winners_DrawsVO_1 = __importDefault(require("../vo/Winners_DrawsVO"));
var ParticipantsDrawDAO_1 = __importDefault(require("./ParticipantsDrawDAO"));
exports.default = {
    indexOne: function (winner_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listWinners_DrawsVO, listWinners_Draws;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listWinners_DrawsVO = [];
                        return [4 /*yield*/, conn_1.default("winners_draws")
                                .select("*")
                                .where("winner_id", "=", "" + winner_DrawVO.getWinner_id())
                                .where("deleted_at", null)];
                    case 1:
                        listWinners_Draws = _a.sent();
                        listWinners_Draws.forEach(function (item) {
                            var winner_draw = new Winners_DrawsVO_1.default();
                            winner_DrawVO.setCreated_at(item.created_at);
                            winner_DrawVO.setDeleted_at(item.deleted_at);
                            winner_DrawVO.setImage(item.image);
                            winner_DrawVO.setParticipants_draw_participant_id(item.participants_draw_participant_id);
                            winner_DrawVO.setVideo(item.video);
                            winner_DrawVO.setWinner_id(item.winner_id);
                            listWinners_DrawsVO.push(winner_draw);
                        });
                        return [2 /*return*/, listWinners_DrawsVO];
                }
            });
        });
    },
    indexAllJoinWinnersParticipantsUsersQuotasDraw: function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default.raw("\n    \n    SELECT \n    winners_draws.winner_id,\n    winners_draws.participants_draw_participant_id,\n    winners_draws.image,\n    winners_draws.video,\n    users.name,\n    users.address,\n    draws.date_draw,\n    draws.title,\n    GROUP_CONCAT( draw_quotas.number) as cotas\n    FROM winners_draws \n      INNER JOIN participants_draw ON participants_draw.participant_id = winners_draws.participants_draw_participant_id\n        INNER JOIN draw_quotas ON participants_draw.draw_quotas_draw_quota_id = draw_quotas.draw_quota_id\n        INNER JOIN users ON users.user_id = participants_draw.users_user_id \n        INNER JOIN draws ON draws.draw_id = participants_draw.draws_draw_id\n    WHERE  \n       participants_draw.deleted_at IS NULL AND\n       participants_draw.status = \"sold\" AND \n       winners_draws.deleted_at is null\n    GROUP BY\n        winners_draws.winner_id\n    ")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    },
    indexAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var listWinners_DrawsVO, listWinners_Draws;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listWinners_DrawsVO = [];
                        return [4 /*yield*/, conn_1.default("winners_draws")
                                .select("*")
                                .where("deleted_at", null)];
                    case 1:
                        listWinners_Draws = _a.sent();
                        listWinners_Draws.forEach(function (item) {
                            var winner_draw = new Winners_DrawsVO_1.default();
                            winner_draw.setCreated_at(item.created_at);
                            winner_draw.setDeleted_at(item.deleted_at);
                            winner_draw.setImage(item.image);
                            winner_draw.setParticipants_draw_participant_id(item.participants_draw_participant_id);
                            winner_draw.setVideo(item.video);
                            winner_draw.setWinner_id(item.winner_id);
                            listWinners_DrawsVO.push(winner_draw);
                        });
                        return [2 /*return*/, listWinners_DrawsVO];
                }
            });
        });
    },
    create: function (winner_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_drawVO, listParticipants, responseDAO, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        participant_drawVO = new Participants_DrawVO_1.default();
                        participant_drawVO.setParticipant_id(winner_DrawVO.getParticipants_draw_participant_id());
                        return [4 /*yield*/, ParticipantsDrawDAO_1.default.indexOne(participant_drawVO)];
                    case 1:
                        listParticipants = _a.sent();
                        responseDAO = false;
                        if (!(listParticipants.length >= 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, conn_1.default("winners_draws").insert({
                                image: winner_DrawVO.getImage(),
                                participants_draw_participant_id: winner_DrawVO.getParticipants_draw_participant_id(),
                                video: winner_DrawVO.getVideo(),
                            })];
                    case 2:
                        _a.sent();
                        responseDAO = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/, responseDAO];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    update: function (winner_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_drawVO, listParticipants, responseDAO, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        participant_drawVO = new Participants_DrawVO_1.default();
                        participant_drawVO.setParticipant_id(winner_DrawVO.getParticipants_draw_participant_id());
                        return [4 /*yield*/, ParticipantsDrawDAO_1.default.indexOne(participant_drawVO)];
                    case 1:
                        listParticipants = _a.sent();
                        responseDAO = false;
                        console.log(winner_DrawVO);
                        if (!(listParticipants.length >= 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, conn_1.default("winners_draws")
                                .update({
                                image: winner_DrawVO.getImage(),
                                participants_draw_participant_id: winner_DrawVO.getParticipants_draw_participant_id(),
                                video: winner_DrawVO.getVideo(),
                            })
                                .where("winner_id", "=", "" + winner_DrawVO.getWinner_id())];
                    case 2:
                        response = _a.sent();
                        responseDAO = response == 1 ? true : false;
                        _a.label = 3;
                    case 3: return [2 /*return*/, responseDAO];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (winner_DrawVO) {
        return __awaiter(this, void 0, void 0, function () {
            var respnse, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, conn_1.default("winners_draws")
                                .update({
                                deleted_at: new Date(),
                            })
                                .where("winner_id", "=", "" + winner_DrawVO.getWinner_id())];
                    case 1:
                        respnse = _a.sent();
                        return [2 /*return*/, respnse == 1 ? true : false];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
};
