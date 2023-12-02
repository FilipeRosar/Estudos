// const aluno = ['João', 'Filipe', 'Jonas'];
// //                0        1        2

// aluno.push('Renata');
// aluno[3] = 'Joana'

// console.log(aluno);

const notas = [];

notas.push(10);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(1))