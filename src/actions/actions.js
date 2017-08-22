import superagent from 'superagent';

/***********************
CONTS
***********************/
export const FETCH_PROJECTS = "FETCH_PROJECTS";


/***********************
API
***********************/
const URL = "http://brettgrisinger.com/data/wp-json/wp/v2";

/***********************
FETCH PROJECTS
***********************/
export function fetchProjects(){
	return dispatch => {
		const url = `${URL}/posts`;
		superagent.get(url).end(function(err,res){
			if (res) {
				dispatch({
					type: FETCH_PROJECTS,
					payload: res.body
				});
			}
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
