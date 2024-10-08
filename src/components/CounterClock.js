import { useContext, useEffect } from "react";
import ClockContext from "./store/ClockContext";

const CounterClock=(namec)=>{

    const [state]=useContext(ClockContext)

    useEffect(()=>{
		let interval=null;

		if(state.active&&state.pause===false){			
		interval=setInterval(()=>{
			//setState(state=>({...state, time:state.time-1}));
			state.time=state.time-1
			console.log(state.time)
		},1000);
		}
		else{
			clearInterval(interval);
		}
		return ()=>{
			clearInterval(interval);
		}
	},[state.active,state.pause]);
	



return(
    <div id={namec}>
        {state.time}
    </div>
)

}

export default CounterClock