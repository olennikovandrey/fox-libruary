/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  logOutAction,
  showHeaderMenuAction,
} from "../../store/action-creators/actions";
import { IDispatch } from "../../interfaces/interfaces";
import React from "react";
import { useDispatch } from "react-redux";

const HeaderMenu = () => {
  const dispatch = useDispatch<IDispatch<any>>();
  const state = useTypedSelector((state) => state.data);

  const logOutFn = () => {
    dispatch(logOutAction());
    dispatch(showHeaderMenuAction());
  };

  return (
    <div className="header-menu">
      <span className="header-menu__user-name">
        {state.currentUser?.userName}
      </span>
      <span className="header-menu__item">Settings</span>
      <span className="header-menu__line"></span>
      <span className="header-menu__item">My orders</span>
      <span className="header-menu__log-out" onClick={() => logOutFn()}>
        Log out
      </span>
    </div>
  );
};

export default HeaderMenu;
