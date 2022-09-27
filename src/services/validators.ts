export const userValidator = (
  event: React.FormEvent<HTMLInputElement>,
  userName: string,
  stateValidFn: (value: boolean) => void,
  stateErrorFn: (value: string) => void,
  stateFn: (inputValue: string) => void
): void => {
  const usersArr: string[] = userName.replace(/\s+/g, " ").split(" ");
  if (usersArr.length > 2) { usersArr.length = 2; }
  stateFn(usersArr.join(" "));
  const user: string = userName;
  const isWordsLength: boolean = usersArr.every(word => word.length >= 3 && word.length <= 15);
  const regexp = /^[a-z]*$/i;
  const isLatinLetters: boolean = usersArr.every(letter => regexp.test(letter));

  if (!user) {
    stateValidFn(false);
    stateErrorFn("This field can't be empty");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else if (!isLatinLetters) {
    stateValidFn(false);
    stateErrorFn("Use latin letters only");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else if (!isWordsLength) {
    stateValidFn(false);
    stateErrorFn("Words length must be from 3 to 30 symbols");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else if (usersArr.length > 2) {
    stateValidFn(false);
    stateErrorFn("This field must contain two words maximum");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else {
    stateValidFn(true);
    stateErrorFn("");
    event.currentTarget.setAttribute("data-state", "valid");
  }
};

export const birthValidator = (
  event: React.FormEvent<HTMLInputElement>,
  birthDate: string,
  stateValidFn: (value: boolean) => void,
  stateErrorFn: (value: string) => void,
  stateFn: (inputValue: string) => void | undefined
): void => {
  const date: Date = new Date(birthDate);
  const regexp = /[a-zа-яё]/i;

  if (regexp.test(date.toLocaleDateString())) {
    stateValidFn(false);
    stateErrorFn("This field can't be empty");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else {
    stateValidFn(true);
    stateErrorFn("");
    event.currentTarget.setAttribute("data-state", "valid");
  }
};

export const emailValidator = (
  event: React.FormEvent<HTMLInputElement>,
  emailValue: string,
  stateValidFn: (value: boolean) => void,
  stateErrorFn: (value: string) => void,
  stateFn: (inputValue: string) => void | undefined
): void => {
  const email: string = emailValue;
  const regexp = /^([^.@]+)(\.[^.@]+)*@([a-z]+\.)+([a-z]+){2,4}$/;
  const isEmail: boolean = regexp.test(email);

  if (!email) {
    stateValidFn(false);
    stateErrorFn("This field can't be empty");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else if (!isEmail) {
    stateValidFn(false);
    stateErrorFn("Please, use email like: example@mail.com");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else {
    stateValidFn(true);
    stateErrorFn("");
    event.currentTarget.setAttribute("data-state", "valid");
  }
};

export const passwordValidator = (
  event: React.FormEvent<HTMLInputElement>,
  passwordValue: string,
  stateValidFn: (value: boolean) => void,
  stateErrorFn: (value: string) => void,
  stateFn: (inputValue: string) => void | undefined
): void => {
  const password: string = passwordValue;

  if (!password) {
    stateValidFn(false);
    stateErrorFn("This field can't be empty");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else if (password.length < 8 || password.length > 15) {
    stateValidFn(false);
    stateErrorFn("Minimum 8, maximum 15 characters");
    event.currentTarget.setAttribute("data-state", "invalid");
  } else {
    stateValidFn(true);
    stateErrorFn("");
    event.currentTarget.setAttribute("data-state", "valid");
  }
};
