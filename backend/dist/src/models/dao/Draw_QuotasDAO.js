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
var Draw_QuotasVO_1 = __importDefault(require("../vo/Draw_QuotasVO"));
exports.default = {
    indexOne: function (draw_quotaVO) {
        return __awaiter(this, void 0, void 0, function () {
            var listDraw_QuotasVO, listDraw_Quota;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listDraw_QuotasVO = [];
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .select("*")
                                .where("draw_quota_id", "=", "" + draw_quotaVO.getDraw_quota_id())
                                .where("deleted_at", null)];
                    case 1:
                        listDraw_Quota = _a.sent();
                        listDraw_Quota.forEach(function (item) {
                            var draw_quota = new Draw_QuotasVO_1.default();
                            draw_quota.setDraw_quota_id(item.draw_quota_id);
                            draw_quota.setNumber(item.number);
                            draw_quota.setDeleted_At(item.deleted_at);
                            draw_quota.setCreated_at(item.created_at);
                            listDraw_QuotasVO.push(draw_quota);
                        });
                        return [2 /*return*/, listDraw_QuotasVO];
                }
            });
        });
    },
    indexAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var listDraw_QuotasVO, listDraw_Quota;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listDraw_QuotasVO = [];
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .select("*")
                                .where("deleted_at", null)];
                    case 1:
                        listDraw_Quota = _a.sent();
                        listDraw_Quota.forEach(function (item) {
                            var draw_quota = new Draw_QuotasVO_1.default();
                            draw_quota.setDraw_quota_id(item.draw_quota_id);
                            draw_quota.setNumber(item.number);
                            draw_quota.setDeleted_At(item.deleted_at);
                            draw_quota.setCreated_at(item.created_at);
                            listDraw_QuotasVO.push(draw_quota);
                        });
                        return [2 /*return*/, listDraw_QuotasVO];
                }
            });
        });
    },
    create: function (draw_quotaVO) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, conn_1.default("draw_quotas").insert({
                                number: draw_quotaVO.getNumber(),
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    update: function (draw_quotaVO) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .update({
                                number: draw_quotaVO.getNumber(),
                            })
                                .where("draw_quota_id", "=", "" + draw_quotaVO.getDraw_quota_id())
                                .where("deleted_at", null)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response == 1 ? true : false];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (draw_quotaVO) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, conn_1.default("draw_quotas")
                                .update({
                                "deleted_at": new Date()
                            })
                                .where("draw_quota_id", "=", "" + draw_quotaVO.getDraw_quota_id())];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response == 1 ? true : false];
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
