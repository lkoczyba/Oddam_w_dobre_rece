import Home from "./components/Home.jsx";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import DonateItems from "./components/DonateItems.jsx";




function App() {

    return (
        <div className='app'>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/oddaj-rzeczy' element={<DonateItems/>}/>
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/rejestracja' element={<Register/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
            </Routes>
        </div>
    )
}

export default App
