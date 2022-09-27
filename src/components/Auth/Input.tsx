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
  ) => void;
  stateValidFn: (value: boolean) => void;
  stateErrorFn: (errorMessage: string) => void;
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
          validFn(event, value, stateValidFn, stateErrorFn, stateFn)
        }
        onInput={(event) =>
          validFn(event, value, stateValidFn, stateErrorFn, stateFn)
        }
        onKeyUp={(event) =>
          validFn(event, value, stateValidFn, stateErrorFn, stateFn)
        }
        onClick={(event) =>
          validFn(event, value, stateValidFn, stateErrorFn, stateFn)
        }
      />
      {value.length >= 1 && (
        <span className="auth__clear-value" onClick={() => stateFn("")} />
      )}
    </>
  );
};

export default Input;
