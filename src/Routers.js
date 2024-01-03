import AlbumId from './pages/AlbumId';
import AlbumPhotoList from './pages/AlbumPhotoList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route, useNavigate } from 'react-router-dom';



const AppRouters = () => {
 
  const navigate = useNavigate();
    return ( 
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/albuns' element={<AlbumId/>}></Route>
                <Route path='/album/:id' element={<AlbumPhotoList  navigate={navigate}/>}></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            
     );
}

export default AppRouters;