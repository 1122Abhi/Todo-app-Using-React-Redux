import { ADD_TODO, REMOVE_TODO } from "../actions/actionsTypes";

const initState = {
  array: [
    {
      id: 1,
      name: "Hi there, Abhijeet",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        array: [...state.array, action.payload],
      };

    case REMOVE_TODO:
      const newArray = state.array.filter((i) => i.id !== action.payload);
      return {
        array: [...newArray],
      };

    default:
      return state;
  }
};

export default rootReducer;
