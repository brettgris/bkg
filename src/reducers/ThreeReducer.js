import {SET_THREE} from '../actions/actions';

export default function(state=0.0,action){
	switch(action.type){
		case SET_THREE:
			return action.payload
		default:
			return state
	}
}
