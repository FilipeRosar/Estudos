// funções

function addNumber(x: number,y: number): number{
    return x + y;
}

function addToHello(name: string):string{
    return `Hello, ${name}`;
}

function CallToPhone(phone: number | string): number | string{
    return phone;
}

async function getDataBase(id: number): Promise<number | string>{
    return 'Filipe';
}

let soma: number = addNumber(11,7);

console.log(CallToPhone(911323232));

// Interfaces (type x interface)

type robot = {
    id: number | string;
    name: string;
};

interface robot2{
    readonly id: number | string,
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: '1',
    name: 'megaman'
};
const bot2: robot2 = {
    id: '1',
    name: 'megaman',
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot.name = 'cutman');

class Pessoa implements robot2{
  id: string | number;
  name: string;

  constructor(id: string | number, name: string){
    this.id = id;
    this.name = name;
  }
    sayHello(): string {
        return "Method not implemented.";
    }
};

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello())