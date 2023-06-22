import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import SeriesScreen from './pages/SeriesScreen/SeriesScreen';
import MovieScreen from './pages/MovieScreen/MovieScreen';


function App() {
 
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Series' element={<SeriesScreen />} />
            <Route path='/Filmes' element={<MovieScreen />} />
        </Routes>
    </Router>

  );
}

export default App;
