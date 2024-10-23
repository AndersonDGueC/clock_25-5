const ButtonChron=({name,type,push})=>{
		return(
	<div>
	<button className="btn btn-outline-secondary" id={name} onClick={push}>{type}</button>
	</div>
	)
}

export default ButtonChron
