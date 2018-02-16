import superagent from 'superagent';

/***********************
CONTS
***********************/
export const FETCH_DATA = "FETCH_DATA";


/***********************
API
***********************/
const URL = "data/data.json";

/***********************
FETCH PROJECTS
***********************/
export function fetchData(){
	return dispatch => {
		superagent.get(URL).end(function(err,res){

			if (res) {
				dispatch({
					type: FETCH_DATA,
					payload: res.body
				});
			}
		});
	}
}

/***********************
SET PROJECT
***********************/
export const SET_PROJECT = "SET_PROJECT";

export function setProject(n){
	return dispatch => {
		dispatch({
				type: SET_PROJECT,
				payload: n
		});
	}
}

/***********************
SET CURRENT
***********************/
export const SET_CURRENT = "SET_CURRENT";

export function setCurrent(n){
	return dispatch => {
		dispatch({
				type: SET_CURRENT,
				payload: n
		});
	}
}

/***********************
SET CURRENT PROJECT
***********************/

// export function setCurrentProject(n,d){
// 	console.log( n, d );
//
// 	return dispatch => {
// 		dispatch({
// 				type: SET_CURRENT,
// 				payload: 0
// 		});
// 	}
// }

/***********************
SET PAGE
***********************/
export const SET_PAGE = "SET_PAGE";

export function setPage(p){
	return dispatch => {
		dispatch({
				type: SET_PAGE,
				payload: p
		});
	}
}

/***********************
THREE STATE
***********************/
export const SET_THREE = "SET_THREE";

export function setThree(s){
	return dispatch => {
		dispatch({
				type: SET_THREE,
				payload: s
		});
	}
}

/***********************
ANIMATE
***********************/
export const ANIMATE = "ANIMATE";

export function setAnimate(n){
	return dispatch => {
		dispatch({
				type: ANIMATE,
				payload: n
		});
	}
}

/***********************
PAGE ANIMATE
***********************/
export const PAGE_ANIMATE = "PAGE_ANIMATE";

export function setPageAnimate(n){
	return dispatch => {
		dispatch({
				type: PAGE_ANIMATE,
				payload: n
		});
	}
}

/***********************
PAGE ANIMATE
***********************/
export const CAMERA_ANIMATE = "CAMERA_ANIMATE";

export function setCameraAnimate(n){
	return dispatch => {
		dispatch({
				type: CAMERA_ANIMATE,
				payload: n
		});
	}
}

/***********************
HOME ANIMATE
***********************/
export const HOME_ANIMATE = "HOME_ANIMATE";

export function setHomeAnimate(b){
	return dispatch => {
		dispatch({
				type: HOME_ANIMATE,
				payload: b
		});
	}
}

/***********************
PROJECTS MENU
***********************/
export const PROJECTS_MENU = "PROJECTS_MENU";

export function setProjectsMenu(b){
	return dispatch => {
		dispatch({
				type: PROJECTS_MENU,
				payload: b
		});
	}
}

/***********************
POST FOR
***********************/
// export const FORM_CHANGE = "FORM_CHANGE";
//
// export function postForm(o){
// 	s
// 		.then( (res,err)=>{
// 			const s = (res.text==="1") ? "success" : "error";
//
// 			return dispatch => {
// 				dispatch({
// 					type: FORM_CHANGE,
// 					payload: "s"
// 				});
// 			}
// 		})
// }
