import { DataActionTypes, DataAction, UserData } from "../../types/types";
import { Dispatch } from "react";
import axios from "axios";

export const fetchDataAction = () => {
  return async (dispatch: Dispatch<DataAction>): Promise<void> => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA });
      const response = await axios.get("https://fox-library-api.herokuapp.com/api/library");
      dispatch({ type: DataActionTypes.FETCH_DATA_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: DataActionTypes.FETCH_DATA_ERROR,
        payload: "Sorry! Something wrong, try again!" });
    }
  };
};

export const registerUserAction = (user: UserData) => {
  return (dispatch: Dispatch<DataAction>): void => {
    dispatch({ type: DataActionTypes.REGISTER_USER, payload: user });
  };
};

export const signUpAction = () => {
  return (dispatch: Dispatch<DataAction>): void => {
    dispatch({ type: DataActionTypes.SIGN_UP});
  };
};

export const logOutAction = () => {
  return (dispatch: Dispatch<DataAction>): void => {
    dispatch({ type: DataActionTypes.LOG_OUT});
  };
};

export const showHeaderMenuAction = () => {
  return (dispatch: Dispatch<DataAction>): void => {
    dispatch({ type: DataActionTypes.SHOW_HEADER_MENU});
  };
};
