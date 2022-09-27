/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "./Input";
import { IDispatch } from "../../interfaces/interfaces";
import {
  registerUserAction,
  signUpAction,
} from "../../store/action-creators/actions";
import { UserData } from "../../types/types";
import {
  userValidator,
  birthValidator,
  emailValidator,
  passwordValidator,
} from "../../services/validators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserClass } from "../../classes/UserClass";
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
  const [userName, setUserName] = useState("");
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
  const [isUserWrong, setIsUserWrong] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const state = useTypedSelector((state) => state.data);

  const dispatch = useDispatch<IDispatch<any>>();

  const registerUserSubmit = () => {
    const newUser: UserData = new UserClass(
      userName,
      birthDay,
      email,
      password,
    );
    dispatch(registerUserAction(newUser));
    setShowAuth(false);
  };

  const logInSubmit = () => {
    const isUserExists = state.users.find(
      (user) => user.userName === userName && user.password === password,
    );
    if (isUserExists) {
      dispatch(signUpAction());
      setShowAuth(false);
    } else {
      setIsUserWrong(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if ((event.target as Element).classList.value.match("auth-wrapper")) {
        setShowAuth(false);
      }
    });
    return document.addEventListener("click", (event) => {
      if ((event.target as Element).classList.value.match("auth-wrapper")) {
        setShowAuth(false);
      }
    });
  }, [setShowAuth]);

  useEffect(() => {
    if (isUserNameValid && isBirthValid && isEmailValid && isPasswordValid) {
      setIsAuthValid(true);
    } else {
      setIsAuthValid(false);
    }
  }, [isUserNameValid, isBirthValid, isEmailValid, isPasswordValid]);

  return (
    <div className="auth-wrapper">
      <form className="auth">
        <span className="auth__close" onClick={() => setShowAuth(false)}></span>
        <p className="auth__title">{title}</p>
        {isUserWrong && (
          <span className="auth__validation-error">
            Wrong username or password
          </span>
        )}
        <label className="auth__label">
          Username{" "}
          <span className="auth__validation-error">{userNameError}</span>
          <Input
            value={userName}
            placeholder="2 latin words from 3 to 15 symbols"
            stateFn={setUserName}
            inputType="text"
            validFn={userValidator}
            stateValidFn={setIsUserNameValid}
            stateErrorFn={setUserNameError}
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
          />
        </label>
        <button
          className="auth__button"
          type="button"
          onClick={
            data === "Sign Up"
              ? () => registerUserSubmit()
              : () => logInSubmit()
          }
          disabled={!isAuthValid}
        >
          {data}
        </button>
      </form>
    </div>
  );
};

export default Auth;
