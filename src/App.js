
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SandBox from './pages/sandbox_page/sandBox';
import Home from './pages/Home';
import FirstPage from './pages/FirstPage';
import MonsterCardsPage from './pages/MonsterCardsPage/MonsterCardsPage'
import ComponentsPage from './pages/ComponentsPage/ComponentsPage';

function App() {

 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstPage /> }  exact/>
      <Route path='/home' element={<Home />} />
      <Route path='/sandbox' element={<SandBox />} />
      <Route path='/components' element={<ComponentsPage />} />
      <Route path='/monsters' element={<MonsterCardsPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 