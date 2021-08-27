import React from "react";
import { Container, Form, Button     } from 'react-bootstrap';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseName: this.props.workout ? this.props.workout.exerciseName : "",
      exerciseOne: this.props.workout ? this.props.workout.exerciseOne : "",
      exerciseTwo: this.props.workout ? this.props.workout.exerciseTwo : "",
      exerciseThree: this.props.workout ? this.props.workout.exerciseThree : "",
      exerciseFour: this.props.workout ? this.props.workout.exerciseFour : "",
      exerciseFive: this.props.workout ? this.props.workout.exerciseFive : "",
    };
  }

  exerciseName = (e) => {
    const exerciseName = e.target.value;
    this.setState(() => ({ exerciseName }));
  };
  exerciseOne = (e) => {
    const exerciseOne = e.target.value;
    this.setState(() => ({ exerciseOne }));
  };
  exerciseTwo = (e) => {
    const exerciseTwo = e.target.value;
    this.setState(() => ({ exerciseTwo }));
  };
  exerciseThree = (e) => {
    const exerciseThree = e.target.value;
    this.setState(() => ({ exerciseThree }));
  };
  exerciseFour = (e) => {
    const exerciseFour = e.target.value;
    this.setState(() => ({ exerciseFour }));
  };
  exerciseFive = (e) => {
    const exerciseFive = e.target.value;
    this.setState(() => ({ exerciseFive }));
  };

  submitForm = (e) => {
    e.preventDefault();

    this.props.onClick({
      exerciseName: this.state.exerciseName,
      exerciseOne: this.state.exerciseOne,
      exerciseTwo: this.state.exerciseTwo,
      exerciseThree: this.state.exerciseThree,
      exerciseFour: this.state.exerciseFour,
      exerciseFive: this.state.exerciseFive,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <div className="col-md-6 offset-3 mt-5 mb-5">
            <h1 className="text-center">Workout Form</h1>

            <Form.Group>
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control
                type="text"
                onChange={this.exerciseName}
                value={this.state.exerciseName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Exercise One</Form.Label>
              <Form.Control
                type="text"
                onChange={this.exerciseOne}
                value={this.state.exerciseOne}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Exercise Two</Form.Label>

              <Form.Control
                type="text"
                onChange={this.exerciseTwo}
                value={this.state.exerciseTwo}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Exercise Three</Form.Label>
              <Form.Control
                type="text"
                onChange={this.exerciseThree}
                value={this.state.exerciseThree}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Exercise Four</Form.Label>
              <Form.Control
                type="text"
                onChange={this.exerciseFour}
                value={this.state.exerciseFour}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Exercise Five</Form.Label>
              <Form.Control
                type="text"
                onChange={this.exerciseFive}
                value={this.state.exerciseFive}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                onClick={this.submitForm}
                className="mt-3 btn-lg "
                variant="secondary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default WorkoutForm;


