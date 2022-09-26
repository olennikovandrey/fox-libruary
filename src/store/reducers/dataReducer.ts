/* eslint-disable no-case-declarations */
import { DataAction, DataActionTypes, DataState } from "../../types/data";

const initialState: DataState = {
  booksData: [],
  error: null,
  loading: false,
  loaded: false,
  isSignedUp: false,
  isUserExists: false,
  users: []
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
  case DataActionTypes.FETCH_DATA:
    return {
      ...state,
      loading: true
    };

  case DataActionTypes.FETCH_DATA_SUCCESS:
    return {
      ...state,
      booksData: action.payload,
      error: null,
      loading: false,
      loaded: true
    };

  case DataActionTypes.FETCH_DATA_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: false,
      loaded: false
    };

  case DataActionTypes.REGISTER_USER:
    const newUsers = [...state.users];
    const newUser = action.payload;
    const existingUser = state.users.find(user => user.email === newUser.email || user.username === newUser.username);
    newUsers.push(action.payload);
    localStorage.setItem("Fox libruary user", JSON.stringify(newUsers));
    if (existingUser) {
      return {
        ...state,
        isUserExists: true
      };
    } else {
      return {
        ...state,
        users: newUsers,
        isSignedUp: true
      };
    }

  default:
    return state;
  }
};
