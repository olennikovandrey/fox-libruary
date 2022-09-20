import React, { ChangeEvent } from "react";

interface IProps {
  value: string;
  label: string;
  inputType: string;
  stateFn: (value: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  const { label, value, inputType, stateFn } = props;

  return (
    <>
      <label className="auth__label">
        {label}
        <input
          className="auth__input"
          value={value}
          type={inputType}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            stateFn(event.target.value)
          }
        />
        {value.length >= 1 && (
          <span className="auth__clear-value" onClick={() => stateFn("")} />
        )}
      </label>
    </>
  );
};

export default Input;
