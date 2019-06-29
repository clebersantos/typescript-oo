import DaoInterface from './DaoInterface'
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface {
    nomeTabela = 'tb_pessoa'
    atualizar(pessoa: Pessoa): boolean {
        console.log('logica atualizar');
        return true;
    }

    inserir(pessoa: Pessoa): boolean {
        console.log('logica inserir');
        return true;
    }

    remover(id: number): boolean {
        console.log('logica remover');
        return true;
    }

    selecionar(id: number): Pessoa {
        console.log('logica selecionar');
        return new Pessoa('', '');
    }

    selecionarTodos(): any[] {
        console.log('logica selecionarTodos');
        return [new Pessoa('', '')];
    }
}