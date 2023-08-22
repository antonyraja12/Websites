

import React, { useState } from 'react';
import { Apple, Google } from 'react-bootstrap-icons';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 '>
                <div className='col-lg-4 vh-100 d-flex justify-content-center  align-items-center bg-phone '> Board</div>
                <div class="col-lg-7 col-md-8 col-sm-10 col-12 vh-100 bg-div">

                    <div class="login-div ">
                        <h2>Sign In </h2>
                        <p>Sign into your accont</p>
                        <p className='row d-flex justify-content-around'>
                            <p className='col-lg-5 col-md-5 col-12 border border-dark rounded-pill bg-white'><Google/> Sign in with Google </p>
                            <p className='col-5 col-md-5 col-12 border border-dark rounded-pill bg-white'><Apple/> Sign in iOS
                             </p>
                        </p>
                        <form onSubmit={handleSubmit} className='border bg-white  rounded-5 p-3 '>
                            <div className=''>
                                <label htmlFor="username">Username:</label><br/>
                                <input
                                    className='input-box'
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>   
                                <label htmlFor="password">Password:</label><br/>
                                <input
                                    className='input-box'
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <p className='text-primary'>Forget Password ?</p>
                            <div>
                                <button type="submit" className=' btn-cls'>Login</button>
                            </div>
                            <p>Do not Have ab Account ? .<span className='text-primary'>Registered here</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
