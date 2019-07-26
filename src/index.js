import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'tachyons';
import './sass/main.scss';

// routing : https://codeburst.io/getting-started-with-react-router-5c978f70df91
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Livestreams from './components/Livestreams';
import Notfound from './components/notfound';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Livestreams" component={Livestreams} />
            <Route component={Notfound} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

//ReactDOM.render(<App cars={cars} />, document.getElementById('root'));
