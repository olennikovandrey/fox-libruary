import logo from "../../assets/images/header/Fox_Library.svg";
import React from "react";

interface IProps {
  setSearchValue: (value: string) => void;
  showSignUp: (value: boolean) => void;
  showLogIn: (value: boolean) => void;
  searchValue: string;
}

const Header: React.FC<IProps> = (props) => {
  const { searchValue, setSearchValue, showLogIn, showSignUp } = props;

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
      <nav className="header__nav" onClick={() => showLogIn(true)}>
        Log in
      </nav>
      <nav className="header__nav" onClick={() => showSignUp(true)}>
        Sign Up
      </nav>
    </header>
  );
};

export default Header;
