import { combineReducers } from 'redux';
import auth from './auth';
import page from './page'
const appReducer = combineReducers({
  auth,page
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
