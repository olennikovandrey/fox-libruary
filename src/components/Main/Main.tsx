/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../Header/Header";
import TopSection from "../TopSection/TopSection";
import Auth from "../Auth/Auth";
import Footer from "../Footer/Footer";
import { IDispatch } from "../../interfaces/interfaces";
import { fetchDataAction } from "../../store/action-creators/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";

const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLogInShown, setIsLogInShown] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const dispatch = useDispatch<IDispatch<any>>();
  const state = useTypedSelector((state) => state.data);
  console.log(state);

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  return (
    <section className="main">
      <Header
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        showLogIn={setIsLogInShown}
        showSignUp={setIsSignUpShown}
      />
      <TopSection showSignUp={setIsSignUpShown} />
      <CSSTransition
        in={isLogInShown}
        timeout={200}
        classNames="auth-wrapper"
        unmountOnExit
        onEnter={() => setIsLogInShown(true)}
        onExited={() => setIsLogInShown(false)}
      >
        <Auth
          setShowAuth={setIsLogInShown}
          data="Log in"
          variant="primary"
          dismissible
          title="Log In to Fox Library"
        />
      </CSSTransition>
      <CSSTransition
        in={isSignUpShown}
        timeout={200}
        classNames="auth-wrapper"
        unmountOnExit
        onEnter={() => setIsSignUpShown(true)}
        onExited={() => setIsSignUpShown(false)}
      >
        <Auth
          setShowAuth={setIsSignUpShown}
          data="Sign Up"
          variant="primary"
          dismissible
          title="Welcome to Fox Library"
        />
      </CSSTransition>
      <Footer />
    </section>
  );
};

export default Main;
