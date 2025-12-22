import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Register from './pages/Register';
import User from './pages/User';
import CreateTransaction from './pages/CreateTransaction';
import PrivateRoute from './components/PrivateRoute';

function App(){
    return(
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            <Route path='/user' element={<User/>} />
            <Route path='/transaction' element={<CreateTransaction/>}/>
            <Route element={<PrivateRoute/>}>
                
            </Route>
        </Routes>
    );
}
export default App;