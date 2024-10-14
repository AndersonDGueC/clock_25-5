
import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, COUNT_BACK, START_STOP, RESET} from './actionTypeClock'
import initialStateClock from './initialStateClock';

export const reducerClock=(state, action)=>{
	switch(action.type){
	case INC_SESS:
	//console.log(state.session)
	if(state.session<'60'){
	return{...state, session:state.session+1}
	}
	else{
	return{...state}
	}
	
	case INC_BREK:
	console.log(state.break)
	if(state.break<'60'){
	return{...state, break:state.break+1}
	}
	else{
	return{...state}
	}
	
	case DEC_SESS:
	console.log(state.session)
	if(state.session>'1'){
	return{...state, session:state.session-1}
	}
	else{
	return{...state, session:state.session-1}
	}
	
	case DEC_BREK:
	console.log(state.break)
	if(state.break>'1'){
	return{...state, break:state.break-1}
	}
	else{
	return{...state, break:state.break-1}
	}

	case COUNT_BACK:
	return{...state, time:state.time-1}
	
	case START_STOP:
		if(state.play){
		return{...state, play:false}
		}
		else{
		return{...state,play:true}	
		}
	
		case RESET:
		console.log(state.flag_sr_sp)
	return initialStateClock

	default:
	return initialStateClock
	}
}

