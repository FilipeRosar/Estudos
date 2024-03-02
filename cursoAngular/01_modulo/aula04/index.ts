// generics

function concatArray<T>(...itens: T[]) :T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1 , 6], [3]);
const strArray = concatArray<string[]>(["FIlipe", "Vegeta"], ["Vegeta"]);


console.log(strArray);
console.log(numArray);