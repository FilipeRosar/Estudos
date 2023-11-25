const precoEtanol = 3.64;
const precoGasolina = 5.63;
let tipoCombustivel = 'Gasolina';
const gastoMedioCombustivel = 11;
const distanciaEmKm = 110;
const litrosConsumidos = distanciaEmKm / gastoMedioCombustivel;


if (tipoCombustivel === 'Gasolina') {
    const calculoGasolina = precoGasolina * litrosConsumidos;
    console.log(calculoGasolina.toFixed(2))
} else {
    const calculoEtanol = precoEtanol * litrosConsumidos;
    console.log(calculoEtanol.toFixed(2))
}


