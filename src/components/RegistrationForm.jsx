import React, { useState } from 'react'
import './RegistrationForm.css'
import { login } from '../actions/login'
import { connect } from 'react-redux'


function RegistationForm(props) {
    const [nickname, setNickname] = useState('')

const handleSubmit = (e) => {   
    e.preventDefault()
    props.login(nickname)
}

    return (
        <div>
            <form className='regForm' onSubmit={handleSubmit}>
                <label htmlFor="nick">Enter your nickname</label>
                <input type="text" id='nick' onChange={(e) => {setNickname(e.target.value)}} required/>
                <label htmlFor="email ">Enter your email</label>
                <input type='email' id='email' placeholder='email' required />
                <label htmlFor="tel">Enter your phone number</label>
                <input
                    type='tel'
                    pattern='(\+?\d[- .]*){7,13}'
                    id='tel'
                    required />
                <label htmlFor="pass1">Enter your password</label>
                <input type="password" id='pass1' required />
                <label htmlFor="pass2">Enter your password again</label>
                <input type="password" id='pass2' required />
                <button type='submit'>Create account</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (nickname) => dispatch(login(nickname))
    }
}

export default connect(null, mapDispatchToProps)(RegistationForm)