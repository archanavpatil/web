export const LOGIN = "LOGIN";

interface LoginAction {
  type: typeof LOGIN;
  payload: string;
}

export type AllActions = LoginAction;
