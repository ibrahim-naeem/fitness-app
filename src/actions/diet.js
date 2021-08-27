import { database } from '../firebase/firebase';



export const addDiet = (diet) => ({
    type: 'ADD_DIET',
    diet
})


export const startAddDiet = (dietData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      dietName = '',
      dietOne = '',
      dietTwo = '',
      dietThree = '',
      dietFour = '',
      dietFive = ''
    } = dietData;

    const diet = {
      dietName,
      dietOne,
      dietTwo,
      dietThree,
      dietFour,
      dietFive,
    };

    database
      .ref(`trainers/${uid}/`)
      .push(diet)
      .then((ref) => {
        dispatch(
          addDiet({
            id: ref.key,
            ...diet,
          })
        );
      });
  };
};


export const removeDiet = ({ id } = {}) => ({
  type: "REMOVE_DIET",
  id,
});

export const startRemoveDiet = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`trainers/${uid}/${id}`).remove().then(() => {
      dispatch(removeDiet({id}));
    });
  };
};


// EDIT_Diet
export const editDiet = (id, updates) => ({
  type: 'EDIT_DIET',
  id,
  updates
});

export const startEditDiet = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`trainers/${uid}/${id}`).update(updates).then(() => {
      dispatch(editDiet(id, updates));
    });
  };
};






export const setDiet = (diet) => ({
  type: "SET_DIET",
  diet,
});

export const startSetDiet = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`trainers/${uid}`).once('value').then((snapshot) => {
      const diet = [];

      snapshot.forEach((childSnapshot) => {
        diet.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setDiet(diet));
    });
  };
};
