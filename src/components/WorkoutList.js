import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import WorkoutItem  from "./WorkoutItem";
import { store } from "../index";


const WorkoutList = () =>{
    const workout = store.getState().workout;  
    
return (
  <div>
    <Header />
    <SubHeader title="Workout List"  buttonW="Add Workout"/>
    <div className="mt-5 mb-5 ">
      <div className="col-md-8 offset-2 d-flex flex-wrap">
        {workout.map((workout) => {
          return <WorkoutItem key={workout.id} {...workout} />;
        })}
      </div>
    </div>

    <Footer />
  </div>
);
};



export default WorkoutList;
