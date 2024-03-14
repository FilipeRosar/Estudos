
import { Layout } from './components/Layout';
import styled from 'styled-components';

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  margin-top: 10px;
  text-align: center;
  font-family: 'Arial';
`


function App() {
  return (
    <Layout>
      <Box><h1>Faça o login: </h1></Box>
      <label htmlFor='emailInput'>Email: </label>
      <input
        type='email'
        placeholder='E-mail'
        id='emailInput' />
      <br /><br />
      <label htmlFor='passwordInput'>Senha: </label>
      <input
        type="password"
        placeholder='Senha'
        id='passwordInput' />
      <button type="submit">Entrar</button>
    </Layout>
  );
}

export default App;
