import React from 'react'
import './RegistrationForm.css'


function RegistationForm() {
    return (
        <div>
            <form className='regForm'>
                <label htmlFor="nick">Enter your nickname</label>
                <input type="text" id='nick' required/>
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
                <button type='submit' required>Create account</button>
            </form>
        </div>
    )
}

export default RegistationForm