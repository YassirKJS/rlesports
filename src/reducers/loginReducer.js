const initialState = {
  userLoggedIn: false,
  email: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case "USER_LOGGED_IN":
      console.log('loginReducer: USER_LOGGED_IN..');
      return {
        ...state,
        userLoggedIn: true,
        email: action.email
      };
    case "USER_LOGGED_OUT":
        console.log('loginReducer: USER_LOGGED_OUT..');
      return {
        ...state,
        userLoggedIn: false,
      }
    default:
      return state;
  }
}