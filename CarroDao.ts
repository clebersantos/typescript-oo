import DaoInterface from './DaoInterface'
import Carro from './Carro';

export class CarroDao implements DaoInterface {
    nomeTabela = 'tb_Carro'
    atualizar(carro: Carro): boolean {
        console.log('logica atualizar');
        return true;
    }

    inserir(carro: Carro): boolean {
        console.log('logica inserir');
        return true;
    }

    remover(id: number): boolean {
        console.log('logica remover');
        return true;
    }

    selecionar(id: number): Carro {
        console.log('logica selecionar');
        return new Carro('', '');
    }

    selecionarTodos(): any[] {
        console.log('logica selecionarTodos');
        return [new Carro('', '')];
    }
}