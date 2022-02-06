// const initialState = {
//   confirmed: false,
//   deleted: false,
//   error: false,
//   loading: false,
//   value: '',
// };

const reducerObject = (state) => ({
  'CHECK': {
    ...state,
    loading: true,
  },
  'CONFIRM': {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  'DELETE': {
    ...state,
    deleted: true,
  },
  'ERROR': {
    ...state,
    error: true,
    loading: false,
    value: '',
  },
  'RESET': {
    ...state,
    confirmed: false,
    deleted: false,
    value: '',
  }
});

export const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};