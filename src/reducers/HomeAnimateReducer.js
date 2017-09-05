import {HOME_ANIMATE} from '../actions/actions';

export default function(state= false,action){
	switch(action.type){
		case HOME_ANIMATE:
			return action.payload
		default:
			return state
	}
}
