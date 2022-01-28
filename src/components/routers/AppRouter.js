import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import { JournalApp } from '../JournalApp';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route path='/' exact component={ JournalScreen } />

                    <Redirect to='/auth/login' />

                </Switch>
            </div>
        </Router>
    );
};
