import React, { useState } from 'react'
import './LandingPage.css'
import ChatHome from '../ChatHome/ChatHome'
import userIcon from './usericon.png'
import VerticalLine from '../VerticalLine/VerticalLine'

export default function LandingPage() {
    document.title = "Text To ;-)"

    // LOGIN DETAILS
    const [loggedIn, setLoggedIn] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // SIGNUP DETAILS
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

    if (loggedIn) {
        return (<ChatHome />);
    } else {
        return (
            <div className="main centeredDiv">
                <div className="landingPageHolder">
                    <div className="leftBox centeredDiv">
                        <div className="userIcon ">
                            <img src={userIcon} alt="userIcon" />
                        </div>
                        <div className="loginContainer">
                            <div className="loginInputs">
                                <div className="emailInput">
                                    <input className='userLoginInputs' type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="passwordInput">
                                    <input className='userLoginInputs' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="rememberMe">
                                <input type="checkbox" />
                                <label htmlFor="">Remember Me?</label>
                            </div>
                            <div className="loginButton centeredDiv">
                                <button>Login</button>
                            </div>
                        </div>
                    </div>
                    <VerticalLine/>
                    <div className="rightBox">
                        <h3>Create/Register an Account</h3>
                        <div className="userFullName">
                            <div className="firstName">
                                <input type="text" className='signupInputName' value={firstName} required onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
                            </div>
                            <div className="lastName">
                                <input type="text" className='signupInputName' value={lastName} required onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="signupEmail">
                            <input className='userLoginInputs' type="email" required value={signupEmail} onChange={e => setSignupEmail(e.target.value)} placeholder="Email Address" />
                        </div>
                        <div className="signupPassword">
                            <input className='userLoginInputs' type="password" required value={signupPassword} onChange={e => setSignupPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div className="signupConfirmPassword">
                            <input className='userLoginInputs' type="password" required value={signupConfirmPassword} onChange={e => setSignupConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                        </div>
                        <div className="showPassword">
                            {/* <input type="checkbox" value={showPassword} onChange={setShowPassword(!showPassword)} /> */}
                        </div>
                        <div className="passwordCriteria">
                            <div className={signupPassword === signupConfirmPassword ? 'solved' : undefined}>Passwords must Match</div>
                            <div className={signupPassword.length >= 8 ? 'solved' : undefined}>Password must be at least 8 characters</div>
                            <div className={/[A-Z]/.test(signupPassword) ? 'solved' : undefined} >Password must contain at least 1 Capital Letter</div>
                            <div className={/\d/.test(signupPassword) ? 'solved' : undefined}>Password must contain at least 1 Number</div>
                        </div>
                        <div className="registerButton centeredDiv">
                            <button>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
