import { database } from '../firebase/firebase';



export const addWorkout = (workout) => ({
    type: 'ADD_WORKOUT',
    workout
})


export const startAddWorkout = (workoutData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      exerciseName = '',
      exerciseOne = '',
      exerciseTwo = '',
      exerciseThree = '',
      exerciseFour = '',
      exerciseFive = ''
    } = workoutData;

    const workout = {
      exerciseName,
      exerciseOne,
      exerciseTwo,
      exerciseThree,
      exerciseFour,
      exerciseFive,
    };

    database
      .ref(`trainers/${uid}/`)
      .push(workout)
      .then((ref) => {
        dispatch(
          addWorkout({
            id: ref.key,
            ...workout,
          })
        );
      });
  };
};

// REMOVE_WORKOUT
export const removeWorkout = ({ id } = {}) => ({
  type: "REMOVE_WORKOUT",
  id,
});

export const startRemoveWorkout = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`trainers/${uid}/${id}`).remove().then(() => {
      dispatch(removeWorkout({id}));
    });
  };
};


// EDIT_WORKOUT
export const editWorkout = (id, updates) => ({
  type: 'EDIT_WORKOUT',
  id,
  updates
});

export const startEditWorkout = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`trainers/${uid}/${id}`).update(updates).then(() => {
      dispatch(editWorkout(id, updates));
    });
  };
};





//SET_WORKOUT
export const setWorkout = (workout) => ({
  type: "SET_WORKOUT",
  workout,
});

export const startSetWorkout = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`trainers/${uid}`).once('value').then((snapshot) => {
      const workout = [];

      snapshot.forEach((childSnapshot) => {
        workout.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setWorkout(workout));
    });
  };
};
