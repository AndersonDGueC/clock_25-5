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

const audio=document.getElementById("beep")

const timeFormatter=(time)=>{

	
	const minutes=Math.floor(time/60)
	const seconds=state.time-minutes*60
	const formattedSeconds=seconds<10?'0'+seconds:seconds
	const formattedMinutes=minutes<10?'0'+minutes:minutes
	return `${formattedMinutes}:${formattedSeconds}`
}


const formatTimer=timeFormatter(state.time)

useEffect(()=>{
	let startTimer
	
	if(state.play){
		startTimer=setInterval(()=>{
			
			dispatch(count_back_click())
			console.log(state.time)
			if(formatTimer===`00:00`&&state.timingType==="Session"){
				dispatch(config_break())
				audio.play() 
			}
			if(formatTimer===`00:00`&&state.timingType==="Break"){
				dispatch(config_session())
				audio.pause()
				audio.currentTime=0				
			}
			
	},1000)
	}
	
	return ()=>clearInterval(startTimer)
},[state.play,formatTimer])




const decrementBreakClick=()=>{

dispatch(dec_brek_click())
}

const incrementBreakClick=()=>{

dispatch(inc_brek_click())
}

const decrementSessionClick=()=>{

dispatch(dec_sess_click())
}

const incrementSessionClick=()=>{

dispatch(inc_ses_click())
}

const startStopClick=()=>{

	console.log("hi hacker")

dispatch(startstop_click())
	
}


const resetClick=()=>{
	
	dispatch(reset_click())
	const audio=document.getElementById("beep")
	audio.pause()
	audio.currentTime=0
	
}
	
//


return(
	<ClockContext.Provider value={[state,dispatch]}>
	<div className='container-fluid'>
	<div className='d-flex justify-content-center align-items-center'>
	<div className='col-xs-6 p-5 rounded box'>
	<div className='mb-4'>			
	<div className='d-flex justify-content-center align-items-center' id='first-title'>
	25+5 Clock	
	</div>
	<div>
	<div className='container'>
	<div className='row'>
	<div className='col'>					
	<div id='break_container'>
	<div className='container'>
	<div className='row'>	
	<LabelChron name={'break-label'} text={'Break Length'}/>
	<div className='d-flex justify-content-center align-items-center'>
	<div className='col col-lg-2'>
	<ButtonChron name={'break-decrement'} type={'-'} push={decrementBreakClick}/>
	</div>
	<div className='col col-lg-2'>
	<DisplayChron named={'break-length'} textd={state.break}/>
	</div>
	<div className='col col-lg-2'>
	<ButtonChron name={'break-increment'} type={'+'} push={incrementBreakClick}/>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<div className='col'>
	<div id='session_container'>
	<div className='container'>
	<div className='row'>		
	<LabelChron name={'session-label'} text={'Session Length'}/>
	<div className='d-flex justify-content-center align-items-center'>
	<div className='col col-lg-2'>
	<ButtonChron name={'session-decrement'} type={'-'} push={decrementSessionClick}/>
	</div>
	<div className='col col-lg-2'>
	<DisplayChron named={'session-length'} textd={state.session}/>
	</div>
	<div className='col col-lg-2'>
	<ButtonChron name={'session-increment'} type={'+'} push={incrementSessionClick}/>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<div className='container'>
	<div className='d-flex justify-content-center align-items-center'>	
	
	<LabelChron name={'timer-label'} text={title}/>
	
	</div>
	<div className='d-flex justify-content-center align-items-center'>
	<DisplayChron named={'time-left'} textd={formatTimer}/>
	
	
	<audio id={'beep'} 
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
	</div>
	<div className='d-flex justify-content-center align-items-center'>
	<ButtonChron name={'start_stop'} type={'>||'} push={startStopClick}/>
	<ButtonChron name={'reset'} type={'O'} push={resetClick} />
	</div>
	</div>
	<div>
	
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>	
	</ClockContext.Provider>
)
}

export default 	ContainerChron;
