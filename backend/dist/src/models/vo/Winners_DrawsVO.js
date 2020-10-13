"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Winners_DrawsVO = /** @class */ (function () {
    function Winners_DrawsVO(winner_id, participants_draw_participant_id, image, video, deleted_at, created_at) {
        this.winner_id = winner_id;
        this.participants_draw_participant_id = participants_draw_participant_id;
        this.image = image;
        this.video = video;
        this.deleted_at = deleted_at;
        this.created_at = created_at;
    }
    Winners_DrawsVO.prototype.getWinner_id = function () {
        return this.winner_id;
    };
    Winners_DrawsVO.prototype.setWinner_id = function (winner_id) {
        this.winner_id = winner_id;
    };
    Winners_DrawsVO.prototype.getParticipants_draw_participant_id = function () {
        return this.participants_draw_participant_id;
    };
    Winners_DrawsVO.prototype.setParticipants_draw_participant_id = function (participants_draw_participant_id) {
        this.participants_draw_participant_id = participants_draw_participant_id;
    };
    Winners_DrawsVO.prototype.getImage = function () {
        return this.image;
    };
    Winners_DrawsVO.prototype.setImage = function (image) {
        this.image = image;
    };
    Winners_DrawsVO.prototype.getVideo = function () {
        return this.video;
    };
    Winners_DrawsVO.prototype.setVideo = function (video) {
        this.video = video;
    };
    Winners_DrawsVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    Winners_DrawsVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    Winners_DrawsVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Winners_DrawsVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    return Winners_DrawsVO;
}());
exports.default = Winners_DrawsVO;
