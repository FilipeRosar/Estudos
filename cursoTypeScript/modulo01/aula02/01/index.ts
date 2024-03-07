// const user = {
//     name: 'Filipe',
//     age: 23,
//     showName(){
//         console.log(this.name);
//     }
// };

// const otherUser ={
//     name: 'Fulano',
//     age: 27,
//     showName(){
//         console.log(this.name);
//     }
// }

class User {
    name: string = 'Filipe'
    age: number = 23

    constructor(name: string, age: number){
        this.name = name,
        this.age = age
    }

    showName = () => {
        console.log(this.name);
    }
};

const user = new User('Filipe', 23);
user.showName();

const otherUser = new User('Fulano', 22);
otherUser.showName();