import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.scss';
import HomePage from './pages/HomePage/HomePage.js';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/recipes" element={<HomePage />} />
          <Route path="/recipes/:id" />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}; 

export default App;
