// Declarar variáveis
let nome = 'Iann';
const sobrenome = 'Gabriel Domingos';

nome = `${nome} ${sobrenome}`; 

// Exibir no console
console.log(nome);


const precoCombustivel = 5.79;
const kmporlitro = 0.7
const distanciaKm = 100;

let gastoViagem = (distanciaKm/ kmporlitro) * precoCombustivel;

console.log (gastoViagem);
//ou
console.log(Number(gastoViagem.toFixed(2)));