
import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, COUNT_BACK, START_STOP, CONFIG_BR, RESET, CONFIG_SS} from './actionTypeClock'
import initialStateClock from './initialStateClock';

export const reducerClock=(state, action)=>{
	switch(action.type){
	case INC_SESS:
	if(state.session<'60'){
	return{...state, session:state.session+1, time:state.time+60}
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
	return{...state, session:state.session-1,time:state.time-60}
	}
	else{
	return{...state}
	}
	
	case DEC_BREK:
	console.log(state.break)
	if(state.break>'1'){
	return{...state, break:state.break-1}
	}
	else{
	return{...state}
	}

	case COUNT_BACK:
	return{...state, time:state.time-1}
			
	case START_STOP:
		if(!state.play){
			return{...state, play:true}
		}
		else{
			return{...state, play:false}
		}
	case CONFIG_BR:
	return{...state, time:state.break*60, timingType:"Break"}
		
	case CONFIG_SS:
	return{...state, time:state.session*60, timingType:"Session"}

	case RESET:
	
	return initialStateClock

	default:
	return {...state, time:state.break*60}
	}
}

