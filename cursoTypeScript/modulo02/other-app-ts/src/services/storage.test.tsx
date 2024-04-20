
import { getAllLocalStorage, createLocalStorage, changeLocalStorage } from './storage';

const bank = {
    login: false,
};

describe('Storage', () =>{
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    beforeEach(() => {
        localStorage.clear();
    })

    it('Deve retornar o objeto no localStorage',() =>{
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalled()
    });

    it('Deve criar o objeto no localstorage', () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('Bank', JSON.stringify({login: false}));
    });
    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(bank)
        expect(mockSetItem).toHaveBeenCalledWith('Bank', JSON.stringify(bank))
    })
});