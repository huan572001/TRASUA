const initialState = {
  list: false,
  activeId: null,
};

const hoppy = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_HOPPY": {
      return { ...state, list: action.payload };
    }
    default:
      return state;
  }
};
export default hoppy;
