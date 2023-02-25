export enum Relationship {
  friend,
  enemy,
  stranger,
}

export interface UserStructure {
  username: string;
  password: string;
  email: string;
  avatar: string;
  isLogged: boolean;
  friends: UserInfoUi[];
  enemies: UserInfoUi[];
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserInfoUi {
  username: string;
  avatar: string;
  relationship: Relationship;
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

export type UsersStructure = UserStructure[];
