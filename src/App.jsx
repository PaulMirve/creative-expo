import React, { useEffect } from 'react';
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import Landing from './components/layout/Landing';
import history from './history';
import { appearOnScroll } from './scripts/animations';


export default function App() {
    useEffect(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            appearOnScroll.observe(el);
        });
        document.querySelectorAll('.slide').forEach(el => {
            appearOnScroll.observe(el);
        });
        document.querySelectorAll('.slide-headings').forEach(el => {
            appearOnScroll.observe(el);
        });
    }, [])

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
            <Footer />
        </Router>
    )
}
