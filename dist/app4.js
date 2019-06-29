"use strict";
// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao';
// let dao: ConcessionariaDao = new ConcessionariaDao();
// let dao2: PessoaDao = new PessoaDao();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Dao_1 = __importDefault(require("./Dao"));
var dao3 = new Dao_1.default();
var dao4 = new Dao_1.default();
var concessionaria = new Concessionaria_1.default('', []);
dao3.inserir(concessionaria);
dao4.remover(3);
