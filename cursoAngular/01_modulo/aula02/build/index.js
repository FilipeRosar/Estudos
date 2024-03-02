"use strict";
// tipos primitivos: boolean, number, string;
let ligado = false;
let nome = "Filipe";
let idade = 23;
let altura = 1.8;
//tipos especiais: null, undefined;
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any, void;
let retorno;
let retornoView = false;
// Objeto - sem previsibilidade
let produto = {
    name: 'Filipe',
    cidade: 'Rj',
    idade: 23
};
let meuProduto = {
    nome: 'Tenis',
    preco: 89.99,
    unidade: 5
};
// Arrays
let dados = ['Filipe', 'João', 'Fulana'];
let dados2 = ['Filipe', 'João', 'Fulana'];
let infos = ['Filipe'];
// Tublas 
let boleto = ['agua conta', 199.90, 50];
// Arrays métodos
dados.pop();
// Datas
let aniversario = new Date("2024-01-19 22:50");
console.log(aniversario.toString());
