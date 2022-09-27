/* eslint-disable no-case-declarations */
import { DataAction, DataActionTypes, DataState } from "../../types/types";

const initialState: DataState = {
  booksData: [],
  users: [],
  error: null,
  loading: false,
  loaded: false,
  currentUser: null,
  isSignedUp: false,
  isUserExist: false,
  isHeaderMenuVisible: false
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
    const user = action.payload;
    const existingUser = state.users.find(userData => userData.email === user.email || userData.userName === user.userName);
    newUsers.push(action.payload);
    localStorage.setItem("Fox libruary user", JSON.stringify(newUsers));

    if (existingUser) {
      return {
        ...state,
        isUserExist: true,
        currentUser: user
      };
    } else {
      return {
        ...state,
        users: newUsers,
        isSignedUp: true,
        currentUser: user
      };
    }

  case DataActionTypes.LOG_OUT:
    return {
      ...state,
      isSignedUp: false
    };

  case DataActionTypes.SHOW_HEADER_MENU:
    return {
      ...state,
      isHeaderMenuVisible: !state.isHeaderMenuVisible
    };

  case DataActionTypes.SIGN_UP:
    return {
      ...state,
      isSignedUp: !state.isSignedUp
    };

  default:
    return state;
  }
};
