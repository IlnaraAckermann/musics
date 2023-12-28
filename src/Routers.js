import React from 'react'
import AlbumId from './pages/AlbumId';
import AlbumPhotoList from './pages/AlbumPhotoList';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const AppRouters = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/albuns' element={<AlbumId/>}></Route>
                <Route path='/photos' element={<AlbumPhotoList/>}></Route>
            </Routes>
        </Router>
     );
}

export default AppRouters;