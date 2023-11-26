class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc() {
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    classificarImc() {
        const imc = this.calculoImc();

        if (imc < 18.5) {
            return 'Você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Seu peso é normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Você está acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Você está obeso';
        } else if (imc >= 40) {
            return 'Você está com obesidade grave';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());
