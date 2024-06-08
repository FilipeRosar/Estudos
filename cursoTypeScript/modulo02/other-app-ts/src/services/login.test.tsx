import { useNavigate } from "react-router-dom"
import { verification } from "./login"

// Mocking the API module
jest.mock("../api", () => ({
    api: jest.fn(),
}));

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn,
    })
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate,
}));

describe('Login', () => {
    const mockEmail = 'filiperosa0312@gmail.com';
    const mockPassword = 'validpassword';
    
    // Mock the alert function
    const mockAlert = jest.fn();
    global.alert = mockAlert;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should display a welcome alert if the email is valid', async () => {
        const mockApiResponse = { email: mockEmail, password: mockPassword };
        const { api } = require("../api");
        api.mockResolvedValue(mockApiResponse);

        const response = await verification(mockEmail, mockPassword);
        
        expect(response).toBeTruthy();
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
        expect(mockNavigate).toHaveBeenCalledWith('/4');
        expect(mockAlert).toHaveBeenCalledWith('Welcome!');
    });

    it('should display an error if the email is invalid', async () => {
        const mockApiResponse = { email: mockEmail, password: mockPassword };
        const { api } = require("../api");
        api.mockResolvedValue(mockApiResponse);

        const response = await verification('invalidemail@test.com', 'invalidpassword');
        
        expect(response).toBeFalsy();
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(mockAlert).toHaveBeenCalledWith('Invalid credentials');
    });
});
