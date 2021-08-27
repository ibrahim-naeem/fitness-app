
const workoutRsesReducerDefaultState = [];

const workoutReducer = (state = workoutRsesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      return [...state, action.workout];

    case "REMOVE_WORKOUT":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_WORKOUT":
      return state.map((workout) => {
        if (workout.id === action.id) {
          return {
            ...workout,
            ...action.updates,
          };
        } else {
          return workout;
        }
      });

    case "SET_WORKOUT":
      return action.workout;

    default:
      return state;
  }
};

export default workoutReducer;