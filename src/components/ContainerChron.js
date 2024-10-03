import React, {useReducer, useEffect} from 'react';
import LabelChron from './LabelChron'
import ButtonChron from './ButtonChron'
import DisplayChron from './DisplayChron'
import CounterClock from './CounterClock';
import ClockContext from './store/ClockContext'
import INITIAL_STATE_CLOCK from './store/initialStateClock'
import {reducerClock} from './store/clockFunction'
import {inc_ses_click, inc_brek_click, dec_sess_click, dec_brek_click, start_stop_click, reset_click} from './store/actionClock'


const ContainerChron=()=>{

const [state, dispatch]=useReducer(reducerClock, INITIAL_STATE_CLOCK)

const decrementBreakClick=()=>{
//console.log(state)
dispatch(dec_brek_click())
}

const incrementBreakClick=()=>{
//console.log('Hello World Increment Break')
dispatch(inc_brek_click())
}

const decrementSessionClick=()=>{
//console.log('Hello World Decrement Session')
dispatch(dec_sess_click())
}

const incrementSessionClick=()=>{
//console.log('Hello World Increment Session')
dispatch(inc_ses_click())
}

const startStopClick=()=>{
console.log("enable")
	dispatch(start_stop_click())
	
}

const resetClick=()=>{
	console.log("enable_reset")
	dispatch(reset_click())
}
//


return(
	<ClockContext.Provider value={[state,dispatch]}>
	<div>
	<div id='break_container'>
	<LabelChron name={'break-label'} text={'Break Length'}/>
	<ButtonChron name={'break-decrement'} type={'-'} push={decrementBreakClick}/>
	<DisplayChron named={'break-length'} textd={state.break}/>
	<ButtonChron name={'break-increment'} type={'+'} push={incrementBreakClick}/>
	</div>
	<div id='session_container'>
	<LabelChron name={'session-label'} text={'Session Length'}/>
	<ButtonChron name={'session-decrement'} type={'-'} push={decrementSessionClick}/>
	<DisplayChron named={'session-length'} textd={state.session}/>
	<ButtonChron name={'session-increment'} type={'+'} push={incrementSessionClick}/>
	</div>
	<div>
	<LabelChron name={'timer-label'} text={'Session'}/>
	<CounterClock named={'time-left'}/>
	</div>
	<div>
	<ButtonChron name={'start_stop'} type={'>||'} push={startStopClick}/>
	<ButtonChron name={'reset'} type={'O'} push={resetClick}/>
	</div>
	</div>
	</ClockContext.Provider>
)
}

export default 	ContainerChron;
