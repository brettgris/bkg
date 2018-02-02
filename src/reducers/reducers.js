import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

import ProjectsReducer from './ProjectsReducer';
import CurrentReducer from './CurrentReducer';
import ProjectsMenuReducer from './ProjectsMenuReducer';
import ThreeReducer from './ThreeReducer';
import AnimateReducer from './AnimateReducer';
import PageAnimateReducer from './PageAnimateReducer';
import HomeAnimateReducer from './HomeAnimateReducer';
import CameraAnimateReducer from './CameraAnimateReducer';
import PageReducer from './PageReducer';
import MobileLayoutReducer from './MobileLayoutReducer';

export default combineReducers({
  routing: routerReducer,
  form: FormReducer,
  projects: ProjectsReducer,
  current: CurrentReducer,
  projectmenu: ProjectsMenuReducer,
  three: ThreeReducer,
  animate: AnimateReducer,
  pageanimate: PageAnimateReducer,
  homeanimate: HomeAnimateReducer,
  cameraanimate: CameraAnimateReducer,
  page: PageReducer,
  MobileLayoutReducer: MobileLayoutReducer
});
