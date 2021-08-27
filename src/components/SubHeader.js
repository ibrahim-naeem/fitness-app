
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SubHeader = (props) => {
  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "#5c636f", color: "white" }}
    >
      {props.title && (
        <h1 style={{ margin: "0px 185px", padding: "20px 0px" }}>
          {props.title}
        </h1>
      )}

      {props.buttonW && (
        <NavLink
          to="/AddWorkoutFormPage"
          activeClassName="is-active"
          exact={true}
          style={{ marginLeft: "565px", marginTop: "30px" }}
        >
          <Button variant="dark">Add Workout Plan</Button>
        </NavLink>
      )}

      {props.buttonD && (
        <NavLink
          to="/AddDietFormPage"
          activeClassName="is-active"
          exact={true}
          style={{ marginLeft: "565px", marginTop: "30px" }}
        >
          <Button variant="dark">Add Diet Plan</Button>
        </NavLink>
      )}

      {props.backW && (
        <NavLink
          to="/WorkoutList"
          activeClassName="is-active"
          exact={true}
          style={{ marginLeft: "540px", marginTop: "30px" }}
        >
          <Button variant="dark">Back To WorkoutList</Button>
        </NavLink>
      )}

       {props.backD && (
        <NavLink
          to="/DietList"
          activeClassName="is-active"
          exact={true}
          style={{ marginLeft: "540px", marginTop: "30px" }}
        >
          <Button variant="dark">Back To DietList</Button>
        </NavLink>
      )}
    </div>
  );
};

export default SubHeader;