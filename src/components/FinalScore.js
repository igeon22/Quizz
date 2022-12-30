import root from ".."
import ChoiceMenu from "./ChoiceMenu"
function FinalScore(props){

	const handleClick=()=>{
		root.render(<ChoiceMenu></ChoiceMenu>)

	}

	return(
		<div className="score-display">
			<p className="score">Score Final:{props.fnScore}/15 </p>
			<button className="category-btn d" onClick={handleClick}>Retour</button>
		</div>
	)
}


export default FinalScore