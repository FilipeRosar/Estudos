import { useNavigate } from "react-router-dom"
import { verification } from "./login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn,
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('jest-router-dom') as any,
//     useNavigate: () => mockNavigate,
// }))
describe('Login', () => {

    // const mockAlert = jest.fn();
    // window.alert = mockAlert;

    const mockEmail = 'filiperosa0312@gmail.com';
    it('Deve exibir um alert com boas vindas caso o email for válido ', async () => {
        // await verification(mockEmail)
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
        const response = await verification(mockEmail)
        // expect(mockNavigate).toHaveBeenCalledWith('/4')
        expect(response).toBeTruthy()
    })
    it('Deve exibir um erro caso o email seja inválido', async () => {
        // await verification('email@invalido.com')
        const response = await verification('email@invalido.com');
        expect(response).toBeFalsy()
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        // expect(mockNavigate).toHaveBeenCalledWith()
    })
})