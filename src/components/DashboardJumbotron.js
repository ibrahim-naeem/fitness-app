import React from 'react';
import {  Button, Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { store } from "../index";

const DashboardJumbotron = () => {
  const name = store.getState().auth.name;
    return (
      <Jumbotron style={{ backgroundColor: "#eee", padding: "170px 0px" }}>
        <div className="col-md-6 offset-md-3 ">
          <h1>Hello, {name}</h1>
          <p>
            The purpose of a fitness app is to provide the user with
            instructions and examples of one or more types of exercise, physical
            activity, nutritional programs.
          </p>
          <p className="d-flex justify-content-around m-2">
            <NavLink
              to="/AddDietFormPage"
              className="navigation"
              activeClassName="is-active"
              exact={true}
            >
              <Button variant="secondary">Add Diet Plan</Button>
            </NavLink>

            <NavLink
              to="/AddWorkoutFormPage"
              className="navigation"
              activeClassName="is-active"
              exact={true}
            >
              <Button variant="secondary">Add Workout Plan</Button>
            </NavLink>
          </p>
        </div>
      </Jumbotron>
    );
}

export default DashboardJumbotron;