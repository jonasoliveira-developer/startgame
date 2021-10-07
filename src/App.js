import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyles';
import { PageTemplate } from './styles/Template';



import { Routes } from "./routes";
import { Header } from './components/Header';


function App() {


  return (
    <>
      <Header />
      <PageTemplate>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PageTemplate>
      <GlobalStyle />
    </>
  );
}

export default App;
