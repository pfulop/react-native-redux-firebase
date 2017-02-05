import {LOGGING_IN, LOGGED_IN, CREATING_ACCOUNT, ERROR, CREATED_ACCOUNT} from '../actions/auth';

const initialState = {
  isLogedIn: false,
  isLoggingIn: false,
  creatingAccount: false,
  error: '',
  user: null,
};

export default  (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        isLogedIn: false,
        isLoggingIn: true,
      }
    case LOGGED_IN:
      return {
        ...state,
        user: action.user,
        isLogedIn: true,
        isLoggingIn: false,
      }
    case CREATING_ACCOUNT:
      return {
        ...state,
        creatingAccount: true,
      }
    case ERROR:
      return {
        ...state,
        isLogedIn: false,
        isLoggingIn: false,
        creatingAccount: false,
        error: action.error,
      }
    case CREATED_ACCOUNT:
      return {
        ...state,
        user: action.user,
        creatingAccount: false,
      }
    default:
      return state;
  }
};
