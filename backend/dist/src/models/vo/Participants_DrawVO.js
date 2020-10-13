"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Participants_DrawVO = /** @class */ (function () {
    function Participants_DrawVO(participant_id, draw_quotas_draw_quota_id, users_user_id, draws_draw_id, created_at, status, deleted_at) {
        this.participant_id = participant_id;
        this.draw_quotas_draw_quota_id = draw_quotas_draw_quota_id;
        this.users_user_id = users_user_id;
        this.draws_draw_id = draws_draw_id;
        this.created_at = created_at;
        this.status = status;
        this.deleted_at = deleted_at;
    }
    Participants_DrawVO.prototype.getParticipant_id = function () {
        return this.participant_id;
    };
    Participants_DrawVO.prototype.setParticipant_id = function (participant_id) {
        this.participant_id = participant_id;
    };
    Participants_DrawVO.prototype.getDraw_quotas_draw_quota_id = function () {
        return this.draw_quotas_draw_quota_id;
    };
    Participants_DrawVO.prototype.setDraw_quotas_draw_quota_id = function (draw_quotas_draw_quota_id) {
        this.draw_quotas_draw_quota_id = draw_quotas_draw_quota_id;
    };
    Participants_DrawVO.prototype.getUsers_user_id = function () {
        return this.users_user_id;
    };
    Participants_DrawVO.prototype.setUsers_user_id = function (users_user_id) {
        this.users_user_id = users_user_id;
    };
    Participants_DrawVO.prototype.getDraws_draw_id = function () {
        return this.draws_draw_id;
    };
    Participants_DrawVO.prototype.setDraws_draw_id = function (draws_draw_id) {
        this.draws_draw_id = draws_draw_id;
    };
    Participants_DrawVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Participants_DrawVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    Participants_DrawVO.prototype.getStatus = function () {
        return this.status;
    };
    Participants_DrawVO.prototype.setStatus = function (status) {
        this.status = status;
    };
    Participants_DrawVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    Participants_DrawVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return Participants_DrawVO;
}());
exports.default = Participants_DrawVO;
