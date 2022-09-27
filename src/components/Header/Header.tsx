/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../assets/images/header/Fox_Library.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IDispatch } from "../../interfaces/interfaces";
import { showHeaderMenuAction } from "../../store/action-creators/actions";
import React from "react";
import { useDispatch } from "react-redux";

interface IProps {
  setSearchValue: (value: string) => void;
  showSignUp: (value: boolean) => void;
  showLogIn: (value: boolean) => void;
  searchValue: string;
}

const Header: React.FC<IProps> = (props) => {
  const { searchValue, setSearchValue, showLogIn, showSignUp } = props;
  const dispatch = useDispatch<IDispatch<any>>();
  const state = useTypedSelector((state) => state.data);
  const isUserAuthorized = state.isSignedUp;
  const isHeaderMenuActive = state.isHeaderMenuVisible;

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__search-wrapper">
        <input
          className="header__search-input"
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />
      </div>
      <div className="header__navs-wrapper">
        {!isUserAuthorized && <nav onClick={() => showLogIn(true)}>Log in</nav>}
        {!isUserAuthorized && (
          <nav onClick={() => showSignUp(true)}>Sign Up</nav>
        )}
        {isUserAuthorized && <nav>All books</nav>}
        {isUserAuthorized && <nav>Your orders</nav>}
        {isUserAuthorized && (
          <div
            className="header__navs-user"
            onClick={() => dispatch(showHeaderMenuAction())}
          >
            <nav></nav>
            <span data-state={isHeaderMenuActive ? "active" : ""}></span>
          </div>
        )}
      </div>
      {isHeaderMenuActive && <HeaderMenu />}
    </header>
  );
};

export default Header;
