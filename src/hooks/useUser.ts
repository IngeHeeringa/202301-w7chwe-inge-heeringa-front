import decode from "jwt-decode";
import { loginUserActionCreator } from "../store/features/userSlice";
import { useAppDispatch } from "../store/hooks";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "../types";

const useUser = () => {
  const dispatch = useAppDispatch();
  const tokenKey = "token";

  const registerUser = async (data: FormData) => {
    const response = await fetch(
      `${process.env.REACT_APP_USER_URL}users/register`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error();
    }
  };

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(
      `${process.env.REACT_APP_USER_URL}users/login`,
      {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const { token } = (await response.json()) as LoginResponse;

    const { username } = decode(token) as CustomTokenPayload;

    localStorage.setItem(tokenKey, token);

    dispatch(loginUserActionCreator({ username, token }));
  };

  return { registerUser, loginUser };
};

export default useUser;
