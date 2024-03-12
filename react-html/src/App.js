import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './style.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Innerpage from './components/Innerpage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter basename="/anil/Team-work/March-2021/Bhavin/mp-theme-18">
                    <Switch>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/dashboard'>
                            <Dashboard />
                        </Route>
                        <Route path='/innerpage'>
                            <Innerpage />
                        </Route>
                        <Route path='/'>
                            <Login />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    };
};

export default App;