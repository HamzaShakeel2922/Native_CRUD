const reducer = (state, action) => {
  if (action.type === 'fetchUsersBegin') {
    return {...state, isLoading: true, isError: false, errorMessage: ''};
  }
  if (action.type === 'fetchUsersSuccess') {
    const users = action.payload;
    return {...state, isLoading: false, isError: false, data: users};
  }
  if (action.type === 'fetchUsersError') {
    const error = action.payload;
    return {...state, isLoading: false, isError: true, errorMessage: error};
  }
  if (action.type === 'deleteUser') {
    const data = action.payload;
    return {...state, data};
  }
  if (action.type === 'editUser') {
    const data = action.payload;
    return {...state, data};
  }
  if (action.type === 'addUser') {
    const data = action.payload;
    return {...state, data};
  }
  return {...state};
};

export default reducer;
