// const valorCombustivel = 5.63;

class Carro{
    marca;
    cor;
    gastoMedioCombustivelKm;
    constructor(marca, cor, gastoMedioCombustivelKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;
    }
    calcularGastoDeViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioCombustivelKm * precoCombustivel;
    }
}

const gol = new Carro('Volks', 'Vermelho', 1/13);
const fox = new Carro('Volks', 'Prata', 1/12);


console.log(fox.calcularGastoDeViagem(30, 5.63).toFixed(2))
console.log(gol.calcularGastoDeViagem(80, 5.63).toFixed(2))

// console.log(gol)