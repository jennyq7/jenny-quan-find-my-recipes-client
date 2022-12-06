import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.scss';
import HomePage from './pages/HomePage/HomePage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:id" />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
} 

export default App;
