
import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, START_STOP, RESET} from './actionTypeClock'
import initialStateClock from './initialStateClock';
var second=0
export const reducerClock=(state, action)=>{
	switch(action.type){
	case INC_SESS:
	//console.log(state.session)
	if(state.session<'25'){
	return{...state, session:state.session+1}
	}
	else{
	return{...state}
	}
	case INC_BREK:
	console.log(state.break)
	if(state.break<'5'){
	return{...state, break:state.break+1}
	}
	else{
	return{...state}
	}
	case DEC_SESS:
	console.log(state.session)
	if(state.session<='0'){
	return{...state}
	}
	else{
	return{...state, session:state.session-1}
	}
	case DEC_BREK:
	console.log(state.break)
	if(state.break<='0'){
	return{...state}
	}
	else{
	return{...state, break:state.break-1}
	}

	case START_STOP:
		
	return{...state, write_sr_sp:action.flag_active}
	
	case RESET:
	return initialStateClock

	default:
	   return initialStateClock
	}
}

