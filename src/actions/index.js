export const updateActiveIndex = (index) => ({
    type: 'UPDATE_ACTIVE_INDEX',
    payload: index,
});

export const userLogin = email => {
  return {
    type: "USER_LOGGED_IN",
    email
  };
};