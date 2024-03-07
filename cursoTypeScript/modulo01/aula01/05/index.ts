const arrayNum: number[] = [1,2,3,4,5,6];

arrayNum.forEach(num => {
    if (num > 2){
        console.log(num * 2)
    }
})

arrayNum.map(num => console.log(num))