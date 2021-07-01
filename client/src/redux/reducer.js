const initializeState = {
  name: "",
  email: "",
  id: ""
};

function reducer(state = initializeState, action) {
  console.log(action.payload)
  switch (action.type) {
    case "login":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      };
    case "logout":
      return initializeState;
    default:
      return { ...state };
  }
}

export default reducer;
