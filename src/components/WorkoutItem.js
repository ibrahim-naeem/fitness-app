import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { connect } from "react-redux";
import { startRemoveWorkout } from "../actions/workout";
import { history } from "../routers/AppRouter";


const WorkoutItem = (props) => {
    

    const remove = () => {
      props.startRemoveWorkout({ id: props.id });
      history.push("/WorkoutList");
    } 

return (
  <div>
    {props.exerciseName && <Card className="text-center" style={{ width: "270px", margin: "5px" }}>
      <Link
        style={{ textDecoration: "none", color: 'white' }}
        to={`/EditWorkoutFormPage/${props.id}`}
      >
        <Card.Header className='bg-secondary'>
          <h4>{props.exerciseName}</h4>
        </Card.Header>
      </Link>

      <Card.Body>
        <Link style={{ textDecoration: "none" }} to={`/PoseCalc`}>
          <Card.Title className="text-dark">Estimate Your Pose </Card.Title>
        </Link>

        <Card.Text>
          <span className="d-block pb-2">{props.exerciseOne}</span>
          <span className="d-block pb-2">{props.exerciseTwo}</span>
          <span className="d-block pb-2">{props.exerciseThree}</span>
          <span className="d-block pb-2">{props.exerciseFour}</span>
          <span className="d-block pb-2">{props.exerciseFive}</span>
        </Card.Text>
        <Button className="btn-dark" onClick={remove}>
          Remove Workout
        </Button>
      </Card.Body>
    </Card>}
  </div>
);
};



const mapDispatchToProps = (dispatch) => ({
  startRemoveWorkout: (data) => dispatch(startRemoveWorkout(data)),
});




export default connect(undefined, mapDispatchToProps )(WorkoutItem);