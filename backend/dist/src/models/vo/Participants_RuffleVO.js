"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Participants_RuffleVO = /** @class */ (function () {
    function Participants_RuffleVO(participant_id, users_user_id, created_at, quotas_raffle_quota_raffle_id, raffles_raffle_id, status, deleted_at) {
        this.participant_id = participant_id;
        this.users_user_id = users_user_id;
        this.created_at = created_at;
        this.quotas_raffle_quota_raffle_id = quotas_raffle_quota_raffle_id;
        this.raffles_raffle_id = raffles_raffle_id;
        this.status = status;
        this.deleted_at = deleted_at;
    }
    Participants_RuffleVO.prototype.getParticipant_id = function () {
        return this.participant_id;
    };
    Participants_RuffleVO.prototype.setParticipant_id = function (participant_id) {
        this.participant_id = participant_id;
    };
    Participants_RuffleVO.prototype.getUsers_user_id = function () {
        return this.users_user_id;
    };
    Participants_RuffleVO.prototype.setUsers_user_id = function (users_user_id) {
        this.users_user_id = users_user_id;
    };
    Participants_RuffleVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Participants_RuffleVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    Participants_RuffleVO.prototype.getQuotas_raffle_quota_raffle_id = function () {
        return this.quotas_raffle_quota_raffle_id;
    };
    Participants_RuffleVO.prototype.setQuotas_raffle_quota_raffle_id = function (quotas_raffle_quota_raffle_id) {
        this.quotas_raffle_quota_raffle_id = quotas_raffle_quota_raffle_id;
    };
    Participants_RuffleVO.prototype.getRaffles_raffle_id = function () {
        return this.raffles_raffle_id;
    };
    Participants_RuffleVO.prototype.setRaffles_raffle_id = function (raffles_raffle_id) {
        this.raffles_raffle_id = raffles_raffle_id;
    };
    Participants_RuffleVO.prototype.getStatus = function () {
        return this.status;
    };
    Participants_RuffleVO.prototype.setStatus = function (status) {
        this.status = status;
    };
    Participants_RuffleVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    Participants_RuffleVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return Participants_RuffleVO;
}());
exports.default = Participants_RuffleVO;
