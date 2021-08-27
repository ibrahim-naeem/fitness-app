
import React from 'react';
import { connect } from 'react-redux';
import {
  SignInWithEmail,
  LogInWithEmail,
  loginWithGoogle,
} from "../actions/auth";




import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import {history} from "../routers/AppRouter";

import '../css/main.css';

import { store } from '../index';



const Login = (props) => {
  
  const signup = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    store.dispatch(SignInWithEmail(email, password));
  };

  const login = (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    store.dispatch(LogInWithEmail(email, password));
  };


  return (
    <div className="bg-image">
      <Container className={"align-form"}>
        <Row className={""}>
          <Col lg={6} className={""}>
            <div className="">
              <Form>             
                <Form.Group className={"m-4"} id="formBasicEmail">
                  <Form.Label className={"h3 text-white"}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                  />
                </Form.Group>
                <Form.Group className={"m-4 errShow"} id="formBasicPassword">
                  <Form.Label className={"h3 text-white"}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    id="password"
                  />
                </Form.Group>
                {/* Login button */}
                <div className="d-flex justify-content-around mb-2 ">
                  <Button
                    className="block w-50"
                    size="lg"
                    variant="dark"
                    type="submit"
                    onClick={login}
                  >
                    Login with Email here..
                  </Button>
                </div>
                {/* Signup button */}
                <div className="d-flex justify-content-around mb-2 ">
                  <Button
                    className="block w-50"
                    size="lg"
                    variant="dark"
                    type="submit"
                    onClick={signup}
                  >
                    Signup with Email here..
                  </Button>
                </div>
              </Form>
            </div>
            {/* Google Login  button */}
            <div className="d-flex justify-content-around mb-2 ">
              <Button
                className="block w-50"
                size="lg"
                variant="dark"
                type="submit"
                onClick={props.loginWithGoogle}
              >
                Login as Trainer
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  uid: state.auth.uid,
})

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);