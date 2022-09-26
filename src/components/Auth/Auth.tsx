/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "./Input";
import { IDispatch } from "../../interfaces/interfaces";
import { registerUser } from "../../store/action-creators/booksData";
import { UserData } from "../../types/data";
import {
  userValidator,
  birthValidator,
  emailValidator,
  passwordValidator,
} from "../../services/validators";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  setShowAuth: (value: boolean) => void;
  data: string;
  title: string;
  variant: string;
  dismissible: boolean;
}

const Auth: React.FC<IProps> = (props) => {
  const { setShowAuth, data, title } = props;
  const [username, setUserName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isBirthValid, setIsBirthValid] = useState(
    data === "Sign Up" ? false : true,
  );
  const [isEmailValid, setIsEmailValid] = useState(
    data === "Sign Up" ? false : true,
  );
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isAuthValid, setIsAuthValid] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch<IDispatch<any>>();

  const user: UserData = {
    username: username,
    birthDate: birthDay,
    email: email,
    password: password,
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if ((event.target as Element).classList.value.match("auth-wrapper")) {
        setShowAuth(false);
      }
    });
  }, [setShowAuth]);

  const formValidChecker = () => {
    if (isUserNameValid && isBirthValid && isEmailValid && isPasswordValid) {
      setIsAuthValid(true);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth">
        <span className="auth__close" onClick={() => setShowAuth(false)}></span>
        <p className="auth__title">{title}</p>
        <label className="auth__label">
          Username{" "}
          <span className="auth__validation-error">{userNameError}</span>
          <Input
            value={username}
            placeholder="2 latin words from 3 to 15 symbols"
            stateFn={setUserName}
            inputType="text"
            validFn={userValidator}
            stateValidFn={setIsUserNameValid}
            stateErrorFn={setUserNameError}
            formValidChecker={formValidChecker}
          />
        </label>
        {data === "Sign Up" && (
          <label className="auth__label">
            Your birthdate{" "}
            <span className="auth__validation-error">{birthError}</span>
            <Input
              value={birthDay}
              placeholder=""
              stateFn={setBirthDay}
              inputType="date"
              validFn={birthValidator}
              stateValidFn={setIsBirthValid}
              stateErrorFn={setBirthError}
              formValidChecker={formValidChecker}
            />
          </label>
        )}
        {data === "Sign Up" && (
          <label className="auth__label">
            Email <span className="auth__validation-error">{emailError}</span>
            <Input
              value={email}
              placeholder="example@mail.com"
              stateFn={setEmail}
              inputType="email"
              validFn={emailValidator}
              stateValidFn={setIsEmailValid}
              stateErrorFn={setEmailError}
              formValidChecker={formValidChecker}
            />
          </label>
        )}
        <label className="auth__label">
          Password{" "}
          <span className="auth__validation-error">{passwordError}</span>
          <Input
            value={password}
            placeholder="From 8 to 15 symbols"
            stateFn={setPassword}
            inputType="password"
            validFn={passwordValidator}
            stateValidFn={setIsPasswordValid}
            stateErrorFn={setPasswordError}
            formValidChecker={formValidChecker}
          />
        </label>
        <button
          className="auth__button"
          type="button"
          onClick={() => dispatch(registerUser(user))}
          disabled={!isAuthValid}
        >
          {data}
        </button>
      </form>
    </div>
  );
};

export default Auth;
