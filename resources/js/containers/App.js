import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/Navbar';

function App() {
    return (
        <div className="container">
            <h1>Here</h1>
            <Nav />
            {/* NAV */}
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
