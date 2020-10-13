"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Draw_QuotasVO = /** @class */ (function () {
    function Draw_QuotasVO(draw_quota_id, number, created_at, deleted_at) {
        this.draw_quota_id = draw_quota_id;
        this.number = number;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
    Draw_QuotasVO.prototype.getDraw_quota_id = function () {
        return this.draw_quota_id;
    };
    Draw_QuotasVO.prototype.setDraw_quota_id = function (draw_quota_id) {
        this.draw_quota_id = draw_quota_id;
    };
    Draw_QuotasVO.prototype.getNumber = function () {
        return this.number;
    };
    Draw_QuotasVO.prototype.setNumber = function (number) {
        this.number = number;
    };
    Draw_QuotasVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Draw_QuotasVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    Draw_QuotasVO.prototype.getDeleted_At = function () {
        return this.deleted_at;
    };
    Draw_QuotasVO.prototype.setDeleted_At = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return Draw_QuotasVO;
}());
exports.default = Draw_QuotasVO;
