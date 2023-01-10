import { Route, Routes } from 'react-router-dom'
import Favorites from './features/favorites/Favorites'
import Homepage from './features/Homepage'
import Movie from './features/Movie'

const Router = () => {
    return <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Movie />} path="/movie/:movieId" />
        <Route element={<Favorites />} path="/my-favorites" />
    </Routes>
}

export default Router