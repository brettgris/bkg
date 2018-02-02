import {MOBILE_LAYOUT} from '../actions/actions';

export default function(state = false,action){
	switch(action.type){
		case MOBILE_LAYOUT:
			return action.payload
		default:
			return state
	}
}
