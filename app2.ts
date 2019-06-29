import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/** criar carros */
let carroA = new Carro('Dodge Jouerner', 4);
carroA.acelerar();
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Sonata', 5);

/** lista de carros */
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

/** exibir a lista de carros*/
/** comprar carro */
let cliente = new Pessoa('João', 'Veloster');

concessionaria.mostrarListaDeCarros().map((carro: Carro, index)=> {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);

    }
});


console.log(cliente.dizerCarroQuetem());