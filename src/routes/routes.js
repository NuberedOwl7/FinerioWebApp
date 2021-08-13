import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//routes
import App from '../App';
import Error from '../components/login/invalid';
import User from '../components/me';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path = "/">
                    <App/>
                </Route>
                
                <Route exact path = "/user">
                    <User/>
                </Route>

                <Route exact path = "/invalid">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes; 