import React, { ChangeEvent } from "react";

type IProps = {
  value: string;
  inputType: string;
  placeholder: string;
  stateFn: (value: string) => void | undefined;
  validFn: (
    event: React.FormEvent<HTMLInputElement>,
    inputValue: string,
    stateValidFn: (value: boolean) => void,
    stateErrorFn: (errorMessage: string) => void,
    stateFn: (value: string) => void | undefined,
    formValidChecker: () => void,
  ) => void;
  stateValidFn: (value: boolean) => void;
  stateErrorFn: (errorMessage: string) => void;
  formValidChecker: () => void;
};

const Input: React.FC<IProps> = (props) => {
  const {
    value,
    inputType,
    placeholder,
    stateFn,
    validFn,
    stateValidFn,
    stateErrorFn,
    formValidChecker,
  } = props;

  return (
    <>
      <input
        className="auth__input"
        value={value}
        placeholder={placeholder}
        type={inputType}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          stateFn(event.target.value)
        }
        onBlur={(event) =>
          validFn(
            event,
            value,
            stateValidFn,
            stateErrorFn,
            stateFn,
            formValidChecker,
          )
        }
        onInput={(event) =>
          validFn(
            event,
            value,
            stateValidFn,
            stateErrorFn,
            stateFn,
            formValidChecker,
          )
        }
        onKeyUp={(event) =>
          validFn(
            event,
            value,
            stateValidFn,
            stateErrorFn,
            stateFn,
            formValidChecker,
          )
        }
      />
      {value.length >= 1 && (
        <span className="auth__clear-value" onClick={() => stateFn("")} />
      )}
    </>
  );
};

export default Input;
