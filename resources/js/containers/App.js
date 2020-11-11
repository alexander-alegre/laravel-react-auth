import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Nav from '../components/Navbar';
import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';

const history = createBrowserHistory();
const user = {
    isLoggedIn: false,
};

const RequireAuth = ({ children }) => {
    if (!user.isLoggedIn) {
        return <Redirect to='/login' />;
    }
    return children;
};

function App() {
    console.log(history);
    return (
        <Router history={history}>
            <div className="container">
                <Nav />

                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <RequireAuth>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </RequireAuth>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
