import {SET_THREE} from '../actions/actions';
import {THREE_STREAM} from '../actions/ThreeStates';


export default function(state=THREE_STREAM,action){
	switch(action.type){
		case SET_THREE:
			return action.payload
		default:
			return state
	}
}
