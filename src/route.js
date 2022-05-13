import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

//Para criar rotas no React, exportamos tres caras, BrowserRouter, Routes e Route, 
//dentro do Route passamos as rotas que o usuario irar utilizar apos ser feito uma renderização na pagina quando ocorre o enter do usuario
//Observação a Rota de erro sempre fica por ultimo pois ela é lida depois que é recarregado todas as outras paginas de rotas, alias passando o * no path dessa rota o browser entende que é uma pagina que nao existe

function RoutesApp() {

    return(
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/sobre" element={<Sobre/>} />
              <Route path="/contato" element={<Contato/>} />
              <Route path="/produto/:id" element={<Produto/>} />

              <Route path="*" element={<Erro/>} />
          </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;