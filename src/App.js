import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import SeriesScreen from './pages/SeriesScreen/SeriesScreen';
import MovieScreen from './pages/MovieScreen/MovieScreen';
import Details from './pages/Details/Details';
import Search from './pages/Search/Search';


function App() {
 
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Series' element={<SeriesScreen />} />
            <Route path='/Filmes' element={<MovieScreen />} />
            <Route path='movie/:id' element={<Details />} />
            <Route path='search' element={<Search />} />
        </Routes>
    </Router>

  );
}

export default App;
