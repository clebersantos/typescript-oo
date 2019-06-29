"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.atualizar = function (moto) {
        console.log('logica atualizar');
        return true;
    };
    MotoDao.prototype.inserir = function (moto) {
        console.log('logica inserir');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('logica remover');
        return true;
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('logica selecionarTodos');
        return [new Moto_1.default()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
