 const authRducer = (state = {}, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          uid: action.uid,
        };  
      
      case "LOGINTT":
        return {
          uid: action.uid,
          trainer: action.trainer,
          name: action.name
        };
      case "LOGOUT":
        return {};

      default:
        return state;
    }

};

export default authRducer;