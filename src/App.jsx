import React, { useEffect } from 'react';
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import Landing from './components/layout/Landing';
import history from './history';
import { appearOnScroll } from './scripts/animations';


export default function App() {
    useEffect(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            appearOnScroll.observe(el);
        });
    }, [])

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </Router>
    )
}
