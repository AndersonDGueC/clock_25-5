const ButtonChron=({name,type,push})=>{
		return(
	<div>
	<button id={name} onClick={push}>{type}</button>
	</div>
	)
}

export default ButtonChron
