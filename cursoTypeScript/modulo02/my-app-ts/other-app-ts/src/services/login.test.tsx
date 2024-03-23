import { verification } from "./login"

describe('Login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    it('Deve exibir um alert com boas vindas', () => {
        verification('teste', '154654')
        expect(mockAlert).toHaveBeenCalledWith('Email ou senha incorreta')
    })
})