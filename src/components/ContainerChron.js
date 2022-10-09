import React from 'react';
import LabelChron from './LabelChron'
import ButtonChron from './ButtonChron'
import DisplayChron from './DisplayChron'
import ClockContext from './store/ClockContext'

const ContainerChron=()=>{

const decrementBreakClick=(e)=>{
console.log('Hello World Decrement Break')
}

const incrementBreakClick=(e)=>{
console.log('Hello World Increment Break')
}

const decrementSessionClick=(e)=>{
console.log('Hello World Decrement Session')
}

const incrementSessionClick=(e)=>{
console.log('Hello World Increment Session')
}

return(
	<div>
	<div id='break_container'>
	<LabelChron name={'break-label'} text={'Break Length'}/>
	<ButtonChron name={'break-decrement'} type={'-'} push={decrementBreakClick}/>
	<DisplayChron named={'break-length'} textd={5}/>
	<ButtonChron name={'break-increment'} type={'+'} push={incrementBreakClick}/>
	</div>
	<div id='session_container'>
	<LabelChron name={'session-label'} text={'Session Length'}/>
	<ButtonChron name={'session-decrement'} type={'-'} push={decrementSessionClick}/>
	<DisplayChron named={'session-length'} textd={25}/>
	<ButtonChron name={'session-increment'} type={'+'} push={incrementSessionClick}/>
	</div>
	<div>
	<LabelChron name={'timer-label'} text={'Session'}/>
	<DisplayChron named={'time-left'} textd={'25:00'}/>
	</div>
	<div>
	<ButtonChron name={'start_stop'} type={'>||'}/>
	<ButtonChron name={'reset'} type={'O'}/>
	</div>
	</div>
)
}

export default 	ContainerChron;
