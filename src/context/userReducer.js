export const initialState = {
  users: [],
  selectedUser: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.dataUser],
      };
    case "SELECT_RANDOM_USER":
      const randomIndex = Math.floor(Math.random() * state.users.length);
      return {
        ...state,
        selectedUser: state.users[randomIndex],
      };
    case "CLEAR_SELECTION":
      return {
        ...state,
        selectedUser: null,
      };
    default:
      return state;
  }
};
