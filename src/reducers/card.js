const initialState = {
  cardCount: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD": {
      return { cardCount: action.payload };
    }
    default:
      return state;
  }
};
export default card;
