import {SET_CURRENT} from '../actions/actions';

export default function(state= 0,action){
	switch(action.type){
		case SET_CURRENT:
			return action.payload
		default:
			return state
	}
}
