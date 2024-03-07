import { Account } from './class/Account'
import { CompanyAccont } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(999,'Filipe', 454);
// console.log(peopleAccount);
// peopleAccount.deposit();
const companyAccont: CompanyAccont = new CompanyAccont('Teste', 15);
console.log(companyAccont)
// companyAccont.deposit();

