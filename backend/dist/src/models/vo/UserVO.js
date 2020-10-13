"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserVO = /** @class */ (function () {
    function UserVO(user_id, address, name, cpf, email, phone, password, type, created_at, deleted_at) {
        this.user_id = user_id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.type = type;
        this.address = address;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
    UserVO.prototype.getUser_id = function () {
        return this.user_id;
    };
    UserVO.prototype.setUser_id = function (user_id) {
        this.user_id = user_id;
    };
    UserVO.prototype.getName = function () {
        return this.name;
    };
    UserVO.prototype.setName = function (name) {
        this.name = name;
    };
    UserVO.prototype.getCpf = function () {
        return this.cpf;
    };
    UserVO.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    UserVO.prototype.getEmail = function () {
        return this.email;
    };
    UserVO.prototype.setEmail = function (email) {
        this.email = email;
    };
    UserVO.prototype.getPhone = function () {
        return this.phone;
    };
    UserVO.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    UserVO.prototype.getPassword = function () {
        return this.password;
    };
    UserVO.prototype.setPassword = function (password) {
        this.password = password;
    };
    UserVO.prototype.getType = function () {
        return this.type;
    };
    UserVO.prototype.setType = function (type) {
        this.type = type;
    };
    UserVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    UserVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    UserVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    UserVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    UserVO.prototype.getAddress = function () {
        return this.address;
    };
    UserVO.prototype.setAddress = function (address) {
        this.address = address;
    };
    return UserVO;
}());
exports.default = UserVO;
