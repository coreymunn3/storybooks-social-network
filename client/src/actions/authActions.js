import axios from 'axios';

export const getUser = () => async (dispatch) => {
  const { data } = await axios.get('/auth/currentuser');
  dispatch({
    type: 'GET_USER',
    payload: data,
  });
};
