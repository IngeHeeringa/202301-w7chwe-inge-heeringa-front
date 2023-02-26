import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the userReducer function", () => {
  describe("When it receives a user with a negative isLogged status and a loginUserAction", () => {
    test("Then it should return a user with username 'Uncle Bob', a token 'solid123' and a positive isLogged status", () => {
      const currentUserState = {
        username: "",
        token: "",
        isLogged: false,
      };
      const user = {
        username: "Uncle Bob",
        token: "solid123",
      };
      const expectedUserState = {
        username: "Uncle Bob",
        token: "solid123",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);

      const newUser = userReducer(currentUserState, loginUserAction);

      expect(newUser).toStrictEqual(expectedUserState);
    });
  });
});
