"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bank_AccountVO = /** @class */ (function () {
    function Bank_AccountVO(bank_account_id, name, agency, number_account, created_at, image, cpf, cnpj, deleted_at) {
        this.bank_account_id = bank_account_id;
        this.name = name;
        this.agency = agency;
        this.number_account = number_account;
        this.created_at = created_at;
        this.image = image;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.deleted_at = deleted_at;
    }
    Bank_AccountVO.prototype.getBank_account_id = function () {
        return this.bank_account_id;
    };
    Bank_AccountVO.prototype.setBank_account_id = function (bank_account_id) {
        this.bank_account_id = bank_account_id;
    };
    Bank_AccountVO.prototype.getName = function () {
        return this.name;
    };
    Bank_AccountVO.prototype.setName = function (name) {
        this.name = name;
    };
    Bank_AccountVO.prototype.getAgency = function () {
        return this.agency;
    };
    Bank_AccountVO.prototype.setAgency = function (agency) {
        this.agency = agency;
    };
    Bank_AccountVO.prototype.getNumber_account = function () {
        return this.number_account;
    };
    Bank_AccountVO.prototype.setNumber_account = function (number_account) {
        this.number_account = number_account;
    };
    Bank_AccountVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Bank_AccountVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    Bank_AccountVO.prototype.getImage = function () {
        return this.image;
    };
    Bank_AccountVO.prototype.setImage = function (image) {
        this.image = image;
    };
    Bank_AccountVO.prototype.getCpf = function () {
        return this.cpf;
    };
    Bank_AccountVO.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Bank_AccountVO.prototype.getCnpj = function () {
        return this.cnpj;
    };
    Bank_AccountVO.prototype.setCnpj = function (cnpj) {
        this.cnpj = cnpj;
    };
    Bank_AccountVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    Bank_AccountVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return Bank_AccountVO;
}());
exports.default = Bank_AccountVO;
