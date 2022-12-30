import root from ".."
import MainMenu from "./MainMenu"
function HighScore(props){
	
	const localTasks = JSON.parse(localStorage.getItem('scores'))
	const handleClick=()=>{
		root.render(<MainMenu></MainMenu>)

	}

	return(
		<div className="highscore-container">
			<p className="score high cc">-Meilleurs scores-</p>
			<p className="score high">Histoire: {localTasks[0].histoire}/15 </p>
			<p className="score high">Espace: {localTasks[0].espace}/15 </p>
			<p className="score high">Culture Gle: {localTasks[0].culture}/15 </p>
			<button className="category-btn d" id='main-menu-back' onClick={handleClick}>Retour</button>
		
	</div>
	)
}


export default HighScore