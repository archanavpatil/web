import { AllActions, LOGIN } from "../actions/login";

export interface InitialState {
  name: string;
}

export const initialState: InitialState = {
  name: "nikhil",
};

export const LoginReducer = (
  state: InitialState = initialState,
  action: AllActions
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return { ...state };
  }
};
