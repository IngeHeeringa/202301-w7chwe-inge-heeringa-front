export interface UserLoginStructure {
  username: string;
  token: string;
}

export interface UserState extends UserLoginStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface ApiResponseStructure {
  users: {
    username: string;
    password: string;
    email: string;
    avatar: string;
    id: string;
  }[];
}

export type UsersStructure = UserLoginStructure[];
