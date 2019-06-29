"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/** criar carros */
var carroA = new Carro_1.default('Dodge Jouerner', 4);
carroA.acelerar();
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Sonata', 5);
/** lista de carros */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/** exibir a lista de carros*/
/** comprar carro */
var cliente = new Pessoa_1.default('João', 'Veloster');
concessionaria.mostrarListaDeCarros().map(function (carro, index) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQuetem());
