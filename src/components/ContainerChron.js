import React, {useReducer, useEffect} from 'react';
import LabelChron from './LabelChron'
import ButtonChron from './ButtonChron'
import DisplayChron from './DisplayChron'
import ClockContext from './store/ClockContext'
import INITIAL_STATE_CLOCK from './store/initialStateClock'
import {reducerClock} from './store/clockFunction'
import {inc_ses_click, inc_brek_click, dec_sess_click, dec_brek_click, startstop_click, count_back_click, config_break, config_session, reset_click} from './store/actionClock'


const ContainerChron=()=>{

const [state, dispatch]=useReducer(reducerClock, INITIAL_STATE_CLOCK)

const title=state.timingType==='Session'?"Session":"Break"

const timeFormatter=(time)=>{
	//time=time*60
	
	const minutes=Math.floor(time/60)
	const seconds=state.time-minutes*60
	const formattedSeconds=seconds<10?'0'+seconds:seconds
	const formattedMinutes=minutes<10?'0'+minutes:minutes
	return `${formattedMinutes}:${formattedSeconds}`
}

//const formatTimer=state.timingType==='Session'?timeFormatter(state.session):timeFormatter(state.break)
const formatTimer=timeFormatter(state.time)

useEffect(()=>{
	let startTimer
	
	if(state.play){
		startTimer=setInterval(()=>{
			
			dispatch(count_back_click())
			console.log(state.time)
			if(formatTimer===`00:00`&&state.timingType==="Session"){
				dispatch(config_break()) 
			}
			if(formatTimer===`00:00`&&state.timingType==="Break"){
				dispatch(config_session())
			}
			
	},1000)
	}
	
	return ()=>clearInterval(startTimer)
},[state.play,formatTimer])



/*
const timeout=()=>{setTimeout(()=>{
	if(state.time&&state.play){
		dispatch(count_back_click())
		
	}
},1000)
}

const resetTimer=()=>{
	const audio=document.getElementById("beep")
	if(!state.time&&state.timingType==="SESSION"){
		dispatch(config_break())
		audio.play()
		 
	}
	else if(!state.time&&state.timingType==="BREAK"){
		dispatch(config_session())
		audio.pause()
		audio.currentTime=0
		
	}
}

const clock=()=>{
	
	/*setTimeout(()=>{
		if(state.time&&state.play){
			dispatch(count_back_click())
			
		}
	},1000)
	
	if(state.play){
	timeout()
	resetTimer()
	}
	else{
		clearTimeout(timeout)
	}

}

useEffect(()=>{
	clock()
},[state.play,state.time])

*/
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
 //clearInterval(timeout)
	console.log("hi hacker")
	//console.log(state.session)
dispatch(startstop_click())
//timeInterval()	
}


const resetClick=()=>{
	//console.log("enable_reset")
	//clearTimeout(timeout)
	dispatch(reset_click())
	const audio=document.getElementById("beep")
	audio.pause()
	audio.currentTime=0
	
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
	<LabelChron name={'timer-label'} text={title}/>
	<DisplayChron named={'time-left'} textd={formatTimer}/>
	</div>
	<div>
	<ButtonChron name={'start_stop'} type={'>||'} push={startStopClick}/>
	<ButtonChron name={'reset'} type={'O'} push={resetClick} />
	{/*<AudioBeep namea={'beep'} type_ref={audioref}/>*/}
	<audio id={'beep'} 
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
	</div>
	</div>
	</ClockContext.Provider>
)
}

export default 	ContainerChron;
