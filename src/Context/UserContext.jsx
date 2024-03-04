import {createContext, useContext, useEffect, useReducer} from 'react';
import axios from 'axios';
import reducer from '../Reducers/UsersReducers';
const userContext = createContext();

export const UserContextProvider = ({children}) => {
  const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const fetchUsers = () => {
    dispatch({type: 'fetchUsersBegin'});
    // axios
    //   .get(`${baseUrl}/users`)
    //   .then(response =>
    //     dispatch({type: 'fetchUsersSuccess', payload: response.data}),
    //   )
    //   .catch(err => dispatch({type: 'fetchUsersError', payload: err.message}));
    fetch(`${baseUrl}/users`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch({type: 'fetchUsersSuccess', payload: response});
      })
      .catch(err => dispatch({type: 'fetchUsersError', payload: err.message}));
  };

  const deleteUser = id => {
    const newState = state.data.filter(item => item.id != id);
    dispatch({type: 'deleteUser', payload: newState});
  };

  const addUser = newUser => {
    if (newUser.name === '') return;
    const NewData = state.data;
    NewData.push(newUser);
    dispatch({type: 'addUser', payload: NewData});
  };

  const EditUser = (id, newInfo) => {
    const newState = state.data.map(item => {
      if (item.id === id) {
        return {id: item.id, ...newInfo};
      }
      return item;
    });
    dispatch({type: 'editUser', payload: newState});
  };
  return (
    <userContext.Provider
      value={{
        ...state,
        deleteUser,
        EditUser,
        addUser,
      }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
