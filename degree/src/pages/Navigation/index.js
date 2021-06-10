import React, { useEffect} from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainPage from '../Main';
import BeveragesPage from '../Beverages';
import Login from '../SignIn';
import { signOut } from '../../actions';
import { ROUTES } from '../../const';
import './styles.css';

function Navigator() {
    const token = useSelector(state => state.token);
    const avatar = useSelector(state => state.picture);
    const name = useSelector(state => state.name);

    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <nav className = 'navbar'>
                <Link to = {ROUTES.MAIN} className = 'link'>Main</Link>
                <Link to = {ROUTES.BEVERAGES} className ='link'>Beverages</Link>
                { token ? (
                    <>
                   
                    <button onClick={() => dispatch(signOut())}>Sign out</button>
                    </>
                ) : (
                    <Link to={ROUTES.SIGNIN} className = 'link'>Sign in</Link>
                )}
            </nav>
            <Switch>
                <Route path={ROUTES.SIGNIN} component={Login} /> 
                <Route path={ROUTES.BEVERAGES} component={BeveragesPage} />
                <Route path={ROUTES.MAIN} component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigator;