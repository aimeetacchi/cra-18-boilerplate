import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Home from './components/pages/home';


const App = () => {
  return (
    <BrowserRouter>
    <div className="app-boilerplate">
      <Nav />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
