import Home from "./components/Home.jsx";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Form from "./components/Form.jsx";

function App() {

    return (
        <div className='app'>
            <Navigation/>
            <Switch>
                <Route path='/oddaj-rzeczy' component={Form}/>
                <Route path='/logowanie' component={Login}/>
                <Route exact path='/rejestracja' component={Register}/>
                <Route path='/wylogowano' component={Logout}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        </div>
    )
}

export default App
