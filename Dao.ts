import DaoInterface from "./DaoInterface";

export default class Dao<T> implements DaoInterface<T> {
    nomeTabela = ''
    atualizar(object: T): boolean {
        console.log('logica atualizar');
        return true;
    }

    inserir(object: T): boolean {
        console.log('logica inserir');
        return true;
    }

    remover(id: number): T {
        console.log('logica remover');
        return Object();
    }

    selecionar(id: number): T {
        console.log('logica selecionar');
        return Object();
    }

    selecionarTodos(): [T] {
        console.log('logica selecionarTodos');
        return [Object()];
    }
}