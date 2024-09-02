import React, { useState } from 'react';

const FreshFoldLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ email, password, userType });
        // You can send this data to your server using fetch or axios
    };

    return (
        <form action="http://localhost:3000/login" method="POST" onSubmit={handleSubmit}>
            <div className="container">
                <div className="card">
                    <div className="top-row">
                        <h1>Welcome to Fresh Fold!</h1>
                        <p>Log in with your email and password</p>
                    </div>
                    <div className="card-details">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="card-details">
                        <input
                            className="inputs"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="fa fa-lock"></i>
                        <span><small className="fa fa-eye-slash passcode"></small></span>
                    </div>
                    <div className="card-details">
                        <div className="user-type-label">You Are:</div>
                        <select
                            name="userType"
                            className="user-type-dropdown"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="washerman">Washerman</option>
                        </select>
                    </div>
                    <p className="forget">Forgot your password?</p>
                    <button type="submit" className="sign-in">Sign in</button>
                </div>
            </div>
        </form>
    );
};

export default FreshFoldLogin;
