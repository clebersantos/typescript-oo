"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.atualizar = function (concessionaria) {
        console.log('logica atualizar');
        return true;
    };
    ConcessionariaDao.prototype.inserir = function (concessionaria) {
        console.log('logica inserir');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return true;
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('logica selecionarTodos');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
