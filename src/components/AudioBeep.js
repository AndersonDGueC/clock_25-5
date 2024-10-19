import { forwardRef } from "react"

const AudioBeep=forwardRef((nameda, type_ref)=>{
    return(
        <audio id={nameda} ref={type_ref}
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
    )
})

export default AudioBeep