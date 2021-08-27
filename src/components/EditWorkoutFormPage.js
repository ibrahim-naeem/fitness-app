import React from "react";

import Header from "./Header";
import SubHeader from "./SubHeader";
import WorkoutForm from "./WorkoutForm";
import Footer from "./Footer";
import { connect } from "react-redux";
import { startEditWorkout } from "../actions/workout";
import { history } from "../routers/AppRouter";

export class EditWorkoutFormPage extends React.Component {
  onSubmit = (workout) => {
    console.log(this.props.test);
    this.props.startEditWorkout(this.props.workout.id, workout);
    history.push("/WorkoutList");
  };

  render() {
    return (
      <div>
        <Header />
        <SubHeader title="Edit Workout" />
        <WorkoutForm workout={this.props.workout} onClick={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  test: state,
  workout: state.workout.find(
    (workout) => workout.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditWorkout: (id, workout) => dispatch(startEditWorkout(id, workout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkoutFormPage);