"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro = new Carro_1.default('Veloster', 3);
var moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
carro.acelerar();
var concessionaria = new Concessionaria_1.default('Av Paulista', [carro]);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
// console.log('carro', carro, 'moto', moto);
