import Input from "./Input";
import React, { useEffect, useState } from "react";

interface IProps {
  setShowAuth: (value: boolean) => void;
  data?: string;
  title: string;
  variant: string;
  dismissible: boolean;
}

const Auth: React.FC<IProps> = (props) => {
  const [username, setUserName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setShowAuth, data, title } = props;

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if ((event.target as Element).classList.value.match("auth-wrapper")) {
        setShowAuth(false);
      }
    });
  });

  return (
    <div className="auth-wrapper">
      <div className="auth">
        <span className="auth__close" onClick={() => setShowAuth(false)}></span>
        <p className="auth__title">{title}</p>
        <Input
          value={username}
          label="Username"
          stateFn={setUserName}
          inputType="text"
        />
        {data === "Sign Up" && (
          <Input
            value={birthDay}
            label="Your birthdate"
            stateFn={setBirthDay}
            inputType="date"
          />
        )}
        {data === "Sign Up" && (
          <Input
            value={email}
            label="Email"
            stateFn={setEmail}
            inputType="email"
          />
        )}
        <Input
          value={password}
          label="Password"
          stateFn={setPassword}
          inputType="password"
        />
        <button className="auth__button" type="button">
          {data}
        </button>
      </div>
    </div>
  );
};

export default Auth;
