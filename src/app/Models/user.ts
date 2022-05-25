export class User{

  id?: number;
  email: string;
  password: string;
  username: string;
  role: string;

  constructor(email:string, username:string, password:string, role:string) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
