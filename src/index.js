import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'tachyons';
import './sass/main.scss';

// routing
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Livestreams from './components/Livestreams';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/Livestreams" component={Livestreams} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

//ReactDOM.render(<App cars={cars} />, document.getElementById('root'));
