import { useContext, useEffect } from "react";
import ClockContext from "./store/ClockContext";

const CounterClock=(namec)=>{

    const [state]=useContext(ClockContext)

    useEffect(()=>{
		if(1){			
		setInterval(()=>{
			//setState(state=>({...state, time:state.time-1}));
			state.time=state.time-1
			console.log(state.time)
			console.log(state.write_sr_sp)
		},1000)
	}
	},[])



return(
    <div id={namec}>
        {state.time}
    </div>
)

}

export default CounterClock