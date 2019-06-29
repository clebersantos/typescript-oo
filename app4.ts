// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao';
// let dao: ConcessionariaDao = new ConcessionariaDao();
// let dao2: PessoaDao = new PessoaDao();

import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Dao from './Dao';

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4: Dao<Pessoa> = new Dao<Pessoa>();

let concessionaria = new Concessionaria('', []);
dao3.inserir(concessionaria);
dao4.remover(3);