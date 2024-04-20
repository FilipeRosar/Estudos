
interface IBank{
    login: boolean
}

const bank = {
    login: false,
};

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('Bank');
};

export const createLocalStorage = () => {
    localStorage.setItem('Bank', JSON.stringify(bank));
};

export const changeLocalStorage = (bank: IBank): void => {
    localStorage.setItem('Bank', JSON.stringify(bank)); 
}