import { actionTypes } from './actions';

const initalState = () => ({
  theme: 'dark'
});

const app = (state = initalState, { type, payload }) => {
  switch(type) {
    case actionTypes.SET_THEME:
      return {
        ...state,
        ...payload,  // { theme: <VALUE>}
      }
    default:
      return state;
  }
}

export default app;