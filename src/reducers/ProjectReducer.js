import {SET_PROJECT} from '../actions/actions';

export default function(state=null,action){
	switch(action.type){
		case SET_PROJECT:
			return action.payload
		default:
			return state
	}
}
