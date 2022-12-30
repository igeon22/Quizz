import ChoiceMenu from "./ChoiceMenu"
import root from ".."
import HighScore from "./HighScore"

function MainMenu(props){

	const handleClick=(e)=>{
		if(e.target.id =='play'){
			root.render(<ChoiceMenu></ChoiceMenu>)
		}
		if(e.target.id =='highscore'){
			root.render(<HighScore></HighScore>)
		}

	}
	return(
		<div className="main-menu">
			<button className="category-btn a" id="play" onClick={handleClick}>Jouer</button>
			<button className="category-btn b" id="highscore" onClick={handleClick}>Meilleurs scores</button>
			<p className="end">Created by Igeon22</p>
		</div>
	)
}

export default MainMenu