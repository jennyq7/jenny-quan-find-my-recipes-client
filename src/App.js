import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage.js';
import Header from './components/Header/Header';
import Recipe from './pages/Recipe/Recipe';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import SavedRecipes from './pages/SavedRecipes/SavedRecipes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/recipes" element={<HomePage />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/recipes/add" element={<AddRecipe />} />
          <Route path="/recipes/saved" element={<SavedRecipes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
