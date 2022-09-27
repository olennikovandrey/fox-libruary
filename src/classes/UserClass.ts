export class UserClass {
  userName: string;
  birthDate: string;
  email: string;
  password: string;

  constructor(userName: string, birthDate: string, email: string, password: string) {
    this.userName = userName;
    this.birthDate = birthDate;
    this.email = email;
    this.password = password;
  }
}
