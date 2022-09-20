/* eslint-disable no-debugger */
import Header from "../Header/Header";
import TopSection from "../TopSection/TopSection";
import Auth from "../Auth/Auth";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLogInShown, setIsLogInShown] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(false);

  return (
    <section className="main">
      <Header
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        showLogIn={setIsLogInShown}
        showSignUp={setIsSignUpShown}
      />
      <TopSection />
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
