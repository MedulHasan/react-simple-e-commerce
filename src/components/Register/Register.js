import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const Register = () => {
    return (
        <div className="w-50 mx-auto my-5">
            <Form>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Your Email" />
                    <Input type="password" name="password" placeholder="Password" className="my-2" />
                    <Input type="password" name="password" placeholder="Re-enter Password" />
                    <Button type="submit" className="my-2">Submit</Button>
                </FormGroup>
            </Form>
            <div className="text-center">
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>--------or---------</div>
                <Button>Google Sign in</Button>
            </div>
        </div>
    );
};

export default Register;