import DaoInterface from './DaoInterface'
import Concessionaria from './Concessionaria';
export class ConcessionariaDao implements DaoInterface {
    nomeTabela = 'tb_concessionaria'
    atualizar(concessionaria: Concessionaria): boolean {
        console.log('logica atualizar');
        return true;
    }

    inserir(concessionaria: Concessionaria): boolean {
        console.log('logica inserir');
        return true;
    }

    remover(id: number): boolean {
        console.log('logica remover');
        return true;
    }

    selecionar(id: number): Concessionaria {
        console.log('logica selecionar');
        return new Concessionaria('', []);
    }

    selecionarTodos(): any[] {
        console.log('logica selecionarTodos');
        return [new Concessionaria('', [])];
    }
}