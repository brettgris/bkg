import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ProjectsReducer from './ProjectsReducer';
import CurrentReducer from './CurrentReducer';
import ThreeReducer from './ThreeReducer';

export default combineReducers({
  routing: routerReducer,
  projects: ProjectsReducer,
  current: CurrentReducer,
  three: ThreeReducer
});
