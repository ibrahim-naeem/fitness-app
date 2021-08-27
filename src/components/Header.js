import React from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

import { Navbar, Nav, Button } from "react-bootstrap";



const Header = (props) => {

    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          className="d-flex justify-content-around"
        >
          <Navbar.Brand>Pose Estimation</Navbar.Brand>
          <Nav>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Home"
              className="p-1"
              activeClassName="is-active"
              exact={true}
            >
              Home
            </NavLink>

            {props.auth.trainer && (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/Dashboard"
                className="p-1"
                activeClassName="is-active"
              >
                Dashboard
              </NavLink>
            )}

            {props.auth.trainer && (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}  
                to="/WorkoutList"
                className="p-1"
                activeClassName="is-active"
              >
                WorkoutList
              </NavLink>
            )}

             {props.auth.trainer && (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}  
                to="/DietList"
                className="p-1"
                activeClassName="is-active"
              >
                DietList
              </NavLink>
            )}
          </Nav>
          <Button variant="outline-light" onClick={props.startLogout}>
            Logout
          </Button>
        </Navbar>
      </div>
    );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);