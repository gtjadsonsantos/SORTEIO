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
var Winners_RafflesVO_1 = __importDefault(require("../vo/Winners_RafflesVO"));
var Participants_RafflesDAO_1 = __importDefault(require("./Participants_RafflesDAO"));
exports.default = {
    indexOne: function (winner_raffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listWinners_RafflesVO, listWinners_Raffles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listWinners_RafflesVO = [];
                        return [4 /*yield*/, conn_1.default("winners_raffles")
                                .select("*")
                                .where("winner_id", "=", "" + winner_raffleVO.getWinner_id())
                                .where("deleted_at", null)];
                    case 1:
                        listWinners_Raffles = _a.sent();
                        listWinners_Raffles.forEach(function (item) {
                            var winner_raffles = new Winners_RafflesVO_1.default();
                            winner_raffles.setCreated_at(item.created_at);
                            winner_raffles.setDeleted_at(item.deleted_at);
                            winner_raffles.setImage(item.image);
                            winner_raffles.setVideo(item.video);
                            winner_raffles.setParticipants_raffle_participant_id(item.participants_raffle_participant_id);
                            winner_raffles.setWinner_id(item.winner_id);
                            listWinners_RafflesVO.push(winner_raffles);
                        });
                        return [2 /*return*/, listWinners_RafflesVO];
                }
            });
        });
    },
    indexAllJoinWinnersParticipantsUsersQuotasRaffles: function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conn_1.default.raw("\n    SELECT \n    winners_raffles.winner_id,\n    winners_raffles.participants_raffle_participant_id,\n    winners_raffles.image,\n    winners_raffles.video,\n    users.name,\n    users.address,\n    raffles.date_raffle,\n    raffles.title,\n    GROUP_CONCAT( quotas_raffle.number) as cotas\n    FROM winners_raffles \n      INNER JOIN participants_raffle ON participants_raffle.participant_id = winners_raffles.participants_raffle_participant_id\n        INNER JOIN quotas_raffle ON participants_raffle.quotas_raffle_quota_raffle_id = quotas_raffle.quota_raffle_id\n        INNER JOIN users ON users.user_id = participants_raffle.users_user_id \n        INNER JOIN raffles ON raffles.raffle_id = participants_raffle.raffles_raffle_id\n    WHERE  \n       participants_raffle.deleted_at IS NULL AND\n        participants_raffle.status = \"sold\" AND \n        winners_raffles.deleted_at is null\n    GROUP BY\n        winners_raffles.winner_id\n    ")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    },
    indexAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var listWinners_RafflesVO, listWinners_Raffles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listWinners_RafflesVO = [];
                        return [4 /*yield*/, conn_1.default("winners_raffles")
                                .select("*")
                                .where("deleted_at", null)];
                    case 1:
                        listWinners_Raffles = _a.sent();
                        listWinners_Raffles.forEach(function (item) {
                            var winner_raffles = new Winners_RafflesVO_1.default();
                            winner_raffles.setCreated_at(item.created_at);
                            winner_raffles.setDeleted_at(item.deleted_at);
                            winner_raffles.setImage(item.image);
                            winner_raffles.setVideo(item.video);
                            winner_raffles.setParticipants_raffle_participant_id(item.participants_raffle_participant_id);
                            winner_raffles.setWinner_id(item.winner_id);
                            listWinners_RafflesVO.push(winner_raffles);
                        });
                        return [2 /*return*/, listWinners_RafflesVO];
                }
            });
        });
    },
    create: function (winner_raffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_raffleVO, listParticipants, responseDAO, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        participant_raffleVO = new Participants_RuffleVO_1.default();
                        participant_raffleVO.setParticipant_id(winner_raffleVO.getParticipants_raffle_participant_id());
                        return [4 /*yield*/, Participants_RafflesDAO_1.default.indexOne(participant_raffleVO)];
                    case 1:
                        listParticipants = _a.sent();
                        responseDAO = false;
                        if (!(listParticipants.length >= 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, conn_1.default("winners_raffles").insert({
                                participants_raffle_participant_id: winner_raffleVO.getParticipants_raffle_participant_id(),
                                video: winner_raffleVO.getVideo(),
                                image: winner_raffleVO.getImage(),
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
    update: function (winner_raffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_raffleVO, listParticipants, responseDAO, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        participant_raffleVO = new Participants_RuffleVO_1.default();
                        participant_raffleVO.setParticipant_id(winner_raffleVO.getParticipants_raffle_participant_id());
                        return [4 /*yield*/, Participants_RafflesDAO_1.default.indexOne(participant_raffleVO)];
                    case 1:
                        listParticipants = _a.sent();
                        responseDAO = false;
                        if (!(listParticipants.length >= 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, conn_1.default("winners_raffles")
                                .update({
                                participants_raffle_participant_id: winner_raffleVO.getParticipants_raffle_participant_id(),
                                video: winner_raffleVO.getVideo(),
                                image: winner_raffleVO.getImage(),
                            })
                                .where("winner_id", "=", "" + winner_raffleVO.getWinner_id())];
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
    delete: function (winner_raffleVO) {
        return __awaiter(this, void 0, void 0, function () {
            var participant_raffleVO, listParticipants, responseDAO, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        participant_raffleVO = new Participants_RuffleVO_1.default();
                        participant_raffleVO.setParticipant_id(winner_raffleVO.getParticipants_raffle_participant_id());
                        return [4 /*yield*/, Participants_RafflesDAO_1.default.indexOne(participant_raffleVO)];
                    case 1:
                        listParticipants = _a.sent();
                        responseDAO = false;
                        if (!(listParticipants.length >= 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, conn_1.default("winners_raffles")
                                .update({
                                deleted_at: new Date(),
                            })
                                .where("winner_id", "=", "" + winner_raffleVO.getWinner_id())];
                    case 2:
                        response = _a.sent();
                        responseDAO = response == 1 ? true : false;
                        _a.label = 3;
                    case 3: return [2 /*return*/, responseDAO];
                    case 4:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
};
