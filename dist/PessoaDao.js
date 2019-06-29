"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.atualizar = function (pessoa) {
        console.log('logica atualizar');
        return true;
    };
    PessoaDao.prototype.inserir = function (pessoa) {
        console.log('logica inserir');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return true;
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica selecionarTodos');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
