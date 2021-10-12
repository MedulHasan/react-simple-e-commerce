import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import useAuth from '../../context/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="w-50 mx-auto my-5">
            <Form>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Your Email" />
                    <Input type="password" name="password" placeholder="Password" className="my-2" />
                    <Button type="submit" className="mb-2">Submit</Button>
                </FormGroup>
            </Form>
            <div className="text-center">
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>--------or---------</div>
                <Button onClick={handleGoogleLogin}>Google Sign in</Button>
            </div>
        </div>
    );
};

export default Login;