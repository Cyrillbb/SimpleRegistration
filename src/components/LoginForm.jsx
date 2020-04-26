import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { users } from './../api';
import { login } from './../actions/login';
import { connect } from 'react-redux';

function LoginForm(props) {
    const [nick, setNick] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (users.filter(i => i.nickname === nick && i.pass === pass).length === 1) {
            props.login(nick)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="logNick">Enter your nickname</label>
                <input type="text" id='logNick' onChange={(e) => { setNick(e.target.value) }} required />
                <label htmlFor="pass">Enter your password</label>
                <input type="password" id='pass' onChange={(e) => { setPass(e.target.value) }} required />
                <button type='submit' onClick={(e) => handleSubmit(e)}>Login</button>
                <Link to='/Reg'>Create account</Link>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (nickname) => dispatch(login(nickname))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)