import { Account } from './class/Account'
import { CompanyAccont } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(999,'Filipe', 454);

const companyAccont: CompanyAccont = new CompanyAccont('Teste', 1565464);

const specialAccount: SpecialAccount = new SpecialAccount('Fulano', 4644646)

companyAccont.deposit(20);
companyAccont.getLoan(500);


