import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import loginImg from '../../assets/img-login.svg';
import './style.scss';

const Login = ({ login, isAuthenticated }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email,password);
        console.log('onSubmit called');
    };
    
    useEffect(() => {
        //Is the user authenticated?
        // Redirect them to the home page
        if(isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="login">
            <div className="login__content">
                <div className="login__img">
                    <img src={loginImg} alt=""/>
                </div>

                <div className="login__forms">
                    <form onSubmit={(e) => onSubmit(e)} className="login__registre" id="login-in">
                        <h1 className="login__title">Sign In</h1>
    
                        <div className="login__box">
                            <i className='bx bx-user login__icon'></i>
                            <input type="email" 
                                    placeholder="Email" 
                                    className="login__input"
                                    name='email'
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                    required/>
                        </div>
    
                        <div className="login__box">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input type="password" 
                                    placeholder="Password" 
                                    className="login__input"
                                    name='password'
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                    minLength='6'
                                    required/>
                        </div>

                        <Link to='/reset_password' className="login__forgot">Forgot password?</Link>

                        <button className="login__button" type='submit'>Sign In</button>

                        <div>
                            <span className="login__account">Don't have an Account ?</span>
                            <Link to='/signup' className="login__signin" id="sign-up">Sign Up</Link>
                        </div>
                    </form>

                    {/* <form action="" className="login__create none" id="login-up">
                        <h1 className="login__title">Create Account</h1>
    
                        <div className="login__box">
                            <i className='bx bx-user login__icon'></i>
                            <input type="text" 
                                    placeholder="Name" 
                                    className="login__input"
                                    name='name'
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                    required/>
                        </div>
    
                        <div className="login__box">
                            <i className='bx bx-at login__icon'></i>
                            <input type="email" 
                                    placeholder="Email" 
                                    className="login__input"
                                    name='email'
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                    required/>
                        </div>

                        <div className="login__box">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input type="password" 
                                    placeholder="Password" 
                                    className="login__input"
                                    name='password'
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                    minLength='6'
                                    required
                                    />
                        </div>
                        <div className="login__box">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input type="password" 
                                    placeholder="Confirm Password" 
                                    className="login__input"
                                    name='re_password'
                                    value={re_password}
                                    onChange={(e) => onChange(e)}
                                    minLength='6'
                                    required
                                    />
                        </div>

                        <button type='submit' className="login__button">Sign Up</button>

                        <div>
                            <span className="login__account">Already have an Account ?</span>
                            <span className="login__signup" id="sign-in">Sign In</span>
                        </div>

                        <div className="login__social">
                            <a href="#" className="login__social-icon"><i className='bx bxl-facebook' ></i></a>
                            <a href="#" className="login__social-icon"><i className='bx bxl-twitter' ></i></a>
                            <a href="#" className="login__social-icon"><i className='bx bxl-google' ></i></a>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.home.authReducer.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

{/* <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>

            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>

            <p className='mt-3'>
                Forgot your Password <Link to='/reset_password'>Reset Password</Link>
            </p>
        </div> */}