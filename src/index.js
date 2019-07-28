import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'tachyons';
import './sass/main.scss';

// routing : https://codeburst.io/getting-started-with-react-router-5c978f70df91
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Livestreams from './components/Livestreams';
import Players from './components/Players';
import Calendar from './components/Calendar';
import Reddit from './components/Reddit';
import Notfound from './components/notfound';
import Home from './components/Home';

import { Provider } from 'react-redux';
import store from './store';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Cars" component={App} />
            <Route exact path="/Livestreams" component={Livestreams} />
            <Route exact path="/Players" component={Players} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Reddit" component={Reddit} />
            <Route component={Notfound} />
        </Switch>
    </Router>
);

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));

//ReactDOM.render(<App cars={cars} />, document.getElementById('root'));
