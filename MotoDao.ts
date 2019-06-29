import DaoInterface from './DaoInterface'
import Moto from './Moto';
export class MotoDao implements DaoInterface {
    nomeTabela = 'tb_moto'
    atualizar(moto: Moto): boolean {
        console.log('logica atualizar');
        return true;
    }

    inserir(moto: Moto): boolean {
        console.log('logica inserir');
        return true;
    }

    remover(id: number): boolean {
        console.log('logica remover');
        return true;
    }

    selecionar(id: number): Moto {
        console.log('logica selecionar');
        return new Moto();
    }

    selecionarTodos(): any[] {
        console.log('logica selecionarTodos');
        return [new Moto()];
    }
}