import logo from "../../assets/images/header/Fox_Library.svg";
import React from "react";

type IProps = {
  setSearchValue: (value: string) => void;
  searchValue: string;
};

const Header: React.FC<IProps> = ({ searchValue, setSearchValue }) => {
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
      <nav className="header__nav">Log in</nav>
      <nav className="header__nav">Sign Up</nav>
    </header>
  );
};

export default Header;
