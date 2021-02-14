export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload || false;
    default:
      return state;
  }
};
