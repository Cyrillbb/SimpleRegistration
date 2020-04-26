import React from 'react'
import './header.css'
import { logout } from '../actions/login'
import { connect } from 'react-redux'

function Header(props) {
    return (
        <div className='header'>
            <h3>Welcome</h3>
            <button onClick={props.logout}>logout</button>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        status: state.loggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)