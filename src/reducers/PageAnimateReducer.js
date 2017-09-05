import {PAGE_ANIMATE} from '../actions/actions';

export default function(state= 0,action){
	switch(action.type){
		case PAGE_ANIMATE:
			return action.payload
		default:
			return state
	}
}
