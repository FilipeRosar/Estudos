// Classes

    // data modifiers
    // public
    // private 
    // protected

class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack() : void{
        console.log(`Attack with ${this.strength} points`)
    } 
}

// Chracter: superclass
// Magician: subclass
class Magician extends Character{
    mana: number;
    constructor(name: string, strength: number, skill: number, mana: number){
    super(name, strength, skill);
    this.mana = mana;
    }
}

const p1 = new Character('Johnny',12,98);
const p2 = new Magician("Ciclano", 2, 99, 100)

p2.attack()