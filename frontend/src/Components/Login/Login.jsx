import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import { useAlert } from 'react-alert';

//login component - no admin requried
const Login = () => {

    //manage email, password state with the help of useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //reducer perform action and then store update
    const dispatch = useDispatch();

    //to show work notification
    const alert = useAlert();
    const { loading, message, error } = useSelector(state => state.login);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            alert.success(message)
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [alert, error, message, dispatch]);

    return (
        <div className='login'>
            <div className="loginContainer">
                <form className="loginForm" onSubmit={submitHandler}>
                    <Typography variant='h4'>
                        <p>A</p>
                        <p>D</p>
                        <p>M</p>
                        <p>I</p>
                        <p style={{ marginRight: "1vmax" }}>N</p>

                        <p>P</p>
                        <p>A</p>
                        <p>N</p>
                        <p>E</p>
                        <p>L</p>
                    </Typography>
                    <div>
                        <input
                            type="email"
                            placeholder="Admin Email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Admin Password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type='submit' variant='contained' disabled={loading}>
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
