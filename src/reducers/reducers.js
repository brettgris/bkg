import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

import DataReducer from './DataReducer';
import CurrentReducer from './CurrentReducer';
import ProjectsMenuReducer from './ProjectsMenuReducer';
import ThreeReducer from './ThreeReducer';
import AnimateReducer from './AnimateReducer';
import PageAnimateReducer from './PageAnimateReducer';
import HomeAnimateReducer from './HomeAnimateReducer';
import CameraAnimateReducer from './CameraAnimateReducer';
import PageReducer from './PageReducer';

export default combineReducers({
  routing: routerReducer,
  form: FormReducer,
  data: DataReducer,
  current: CurrentReducer,
  projectmenu: ProjectsMenuReducer,
  three: ThreeReducer,
  animate: AnimateReducer,
  pageanimate: PageAnimateReducer,
  homeanimate: HomeAnimateReducer,
  cameraanimate: CameraAnimateReducer,
  page: PageReducer
});
