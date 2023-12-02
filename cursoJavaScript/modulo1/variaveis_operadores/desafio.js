const precoCombustivel = 5.79;
const gastoCombustivel = 11;
const distanciaEmKm = 60;

const litrosConsumidos = distanciaEmKm / gastoCombustivel;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
