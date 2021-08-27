import React from "react";

import Header from "./Header";
import SubHeader from "./SubHeader";
import WorkoutForm from "./WorkoutForm";
import Footer from "./Footer";
import { connect } from "react-redux";
import { startAddWorkout } from '../actions/workout';
import { history } from "../routers/AppRouter";


export class AddWorkoutFormPage extends React.Component {
  onSubmit = (workout) => {
    this.props.startAddWorkout(workout);
    history.push("/WorkoutList");
    
  };
  render() {
    return (
      <div>
        <Header />
        <SubHeader title="Add Workout" backW="Dashboad" />
        <WorkoutForm onClick={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWorkout: (workout) => dispatch(startAddWorkout(workout)),
});

export default connect(undefined, mapDispatchToProps)(AddWorkoutFormPage);