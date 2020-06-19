import { ADD_TODO } from "./actionsTypes";
import { REMOVE_TODO } from "./actionsTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const removeTodo = (data) => {
  return {
    type: REMOVE_TODO,
    payload: data,
  };
};
