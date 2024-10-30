import './App.css';
import React from "react";
import Home from './pages/Home';
import QuizCategories from './pages/QuizCategories';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Questions from './pages/Questions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/QuizCategories' element={<QuizCategories />} />
        <Route path='/QuizCategories/:id' element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
