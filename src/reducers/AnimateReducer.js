import {ANIMATE} from '../actions/actions';

export default function(state= 0,action){
	switch(action.type){
		case ANIMATE:
			return action.payload
		default:
			return state
	}
}
