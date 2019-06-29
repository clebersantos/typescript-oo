"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_Carro';
    }
    CarroDao.prototype.atualizar = function (carro) {
        console.log('logica atualizar');
        return true;
    };
    CarroDao.prototype.inserir = function (carro) {
        console.log('logica inserir');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica remover');
        return true;
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Carro_1.default('', '');
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica selecionarTodos');
        return [new Carro_1.default('', '')];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
