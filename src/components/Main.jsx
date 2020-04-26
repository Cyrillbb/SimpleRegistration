import React from 'react'
import RegistationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Header from './Header';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <LoginForm />
                    </Route>
                    <Route exact path='/Reg'>
                        <RegistationForm />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        status: state.loggedIn
    }
}

export default connect(mapStateToProps, null)(Main)