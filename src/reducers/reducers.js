import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ProjectsReducer from './ProjectsReducer';
import CurrentReducer from './CurrentReducer';
import ThreeReducer from './ThreeReducer';
import AnimateReducer from './AnimateReducer';
import PageAnimateReducer from './PageAnimateReducer';
import HomeAnimateReducer from './HomeAnimateReducer';
import PageReducer from './PageReducer';

export default combineReducers({
  routing: routerReducer,
  projects: ProjectsReducer,
  current: CurrentReducer,
  three: ThreeReducer,
  animate: AnimateReducer,
  pageanimate: PageAnimateReducer,
  homeanimate: HomeAnimateReducer,
  page: PageReducer
});
