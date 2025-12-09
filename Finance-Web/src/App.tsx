import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import User from './pages/User';
import PrivateRoute from './components/PrivateRoute';

function App(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route element={<PrivateRoute/>}>
                <Route path='/user' element={<User/>} />
            </Route>
        </Routes>
    );
}
export default App;