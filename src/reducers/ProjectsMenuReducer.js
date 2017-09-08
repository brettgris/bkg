import {PROJECTS_MENU} from '../actions/actions';

export default function(state= false,action){
	switch(action.type){
		case PROJECTS_MENU:
			return action.payload
		default:
			return state
	}
}
