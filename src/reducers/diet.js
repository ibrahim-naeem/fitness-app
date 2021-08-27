
const dietReducerDefaultState = [];

const dietReducer = (state = dietReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_DIET":
      return [...state, action.diet];

    case "REMOVE_DIET":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_DIET":
      return state.map((diet) => {
        if (diet.id === action.id) {
          return {
            ...diet,
            ...action.updates,
          };
        } else {
          return diet;
        }
      });

    case "SET_DIET":
      return action.diet;

    default:
      return state;
  }
};

export default dietReducer;