import { DataActionTypes, DataAction, UserData } from "../../types/data";
import { Dispatch } from "react";
import axios from "axios";

export const fetchData = () => {
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

export const registerUser = (user: UserData) => {
  return (dispatch: Dispatch<DataAction>): void => {
    dispatch({ type: DataActionTypes.REGISTER_USER, payload: user });
  };
};
