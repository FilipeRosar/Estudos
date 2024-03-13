import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card'
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header />
     <div>
       <h1>teste</h1>
       <Card 
          id={1}
          paragraph='Typescript'
          details='TS para frontend e backend'
          />
       <Card 
          id={2}
          paragraph='HTML'
          details='HTML para frontend'
       
       />
       <Card 
          id={3}
          paragraph='SQL'
          details='SQL para banco de dados'
          />
     </div>
    <Footer />
    </>
  );
}

export default App;
