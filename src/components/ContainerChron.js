import React from 'react';
import LabelChron from './LabelChron'
import ButtonChron from './ButtonChron'
import DisplayChron from './DisplayChron'

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
	<ButtonChron name={'break-increment'} type={'+'} push={incrementBreakClick}/>
	</div>
	<div id='session_container'>
	<LabelChron name={'session-label'} text={'Session Length'}/>
	<ButtonChron name={'session-decrement'} type={'-'} push={decrementSessionClick}/>
	<ButtonChron name={'session-increment'} type={'+'} push={incrementSessionClick}/>
	</div>
	</div>
)
}

export default 	ContainerChron;
