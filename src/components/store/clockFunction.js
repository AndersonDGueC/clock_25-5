import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, START_STOP, RESET} from './actionTypeClock'
import initialStateClock from './initialStateClock';

export const reducerClock=(state, action)=>{
	switch(action.type){
	case INC_SESS:
	alert("Hola incrementar session")
	
	case INC_BREK:

	case DEC_SESS:


	case DEC_BREK:


	case START_STOP:

	case RESET:

	default:
	   return initialStateClock
	}
}

