import root from ".."
import App from "../App"
import MainMenu from "./MainMenu"
import spaceData from "../data/spaceData"
import cultureData from "../data/culture"
import historyData from "../data/histoire"

function ChoiceMenu(props){
	const handleClick=(e)=>{
		if(e.target.id =='espace'){
			root.render(<App spaceData={spaceData} category='espace'></App>)
		}
		if(e.target.id =='histoire'){
			root.render(<App spaceData={historyData} category='histoire'></App>)
		}
		if(e.target.id =='culture'){
			root.render(<App spaceData={cultureData} category='culture'></App>)
		}
		else if(e.target.id =='main-menu-back'){
			root.render(<MainMenu></MainMenu>)
		}
	}
	return(
		<div className="category-select">
			<p className="main-menu-title">Choix de la catégorie</p>
			<div className="options">
				<button className="category-btn a" id="culture" onClick={handleClick}>Culture Générale</button>
				<button className="category-btn b" id="histoire" onClick={handleClick}>Histoire</button>
				<button className="category-btn c" id="espace" onClick={handleClick} >Espace</button>
				<button className="category-btn d" id='main-menu-back' onClick={handleClick}>Retour</button>

			</div>
	</div>
	)
}

export default ChoiceMenu