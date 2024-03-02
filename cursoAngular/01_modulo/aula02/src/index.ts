// tipos primitivos: boolean, number, string;
let ligado:boolean = false;
let nome:string = "Filipe";
let idade:number = 23;
let altura:number = 1.8;

//tipos especiais: null, undefined;
let nulo:null = null;
let indefinido:undefined = undefined;

// Tipos abrangentes: any, void;
let retorno:void;

let retornoView:any = false;

// Objeto - sem previsibilidade
let produto: object ={
    name: 'Filipe',
    cidade: 'Rj',
    idade: 23
};


// Objeto tipado - Com previsibilidade

type produtoLoja = {
    nome: string;
    preco: number;
    unidade: number;
};
  
let meuProduto: produtoLoja = {
    nome: 'Tenis',
    preco: 89.99,
    unidade: 5
}
// Arrays

let dados: string[] = ['Filipe', 'João', 'Fulana'];
let dados2: Array<string> = ['Filipe', 'João', 'Fulana'];

let infos: (string | number)[] = ['Filipe'];

// Tublas 

let boleto: [string, number, number] = ['agua conta', 199.90, 50]

// Arrays métodos

dados.pop();

// Datas

let aniversario: Date =  new Date("2024-01-19 22:50");
console.log(aniversario.toString())