import {useEffect} from 'react';
import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, START_STOP, RESET} from './actionTypeClock'
import initialStateClock from './initialStateClock';

export const reducerClock=(state, action)=>{
	switch(action.type){
	case INC_SESS:
	console.log(state.session)
	if(state.session==='25')
	return{...state}
	else{
	return{...state, session:state.session+1}
	}
	case INC_BREK:
	console.log(state.break)
	if(state.break==='5'){
	return{...state}
	}
	else{
	return{...state, break:state.break+1}
	}
	case DEC_SESS:
	console.log(state.session)
	if(state.session==='25'){
	return{...state}
	}
	else{
	return{...state, session:state.session-1}
	}
	case DEC_BREK:
	if(state.break==='5'){
	return{...state}
	}
	else{
	return{...state, break:state.break-1}
	}

	case START_STOP:
	return{...state, write_sr_sp:action.flag_active}
	case RESET:

	default:
	   return initialStateClock
	}
}

