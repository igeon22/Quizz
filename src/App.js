import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import spaceData from './data/spaceData'
import FinalScore from './components/FinalScore';
import root from '.';
import ChoiceMenu from './components/ChoiceMenu';

const localTasks = JSON.parse(localStorage.getItem('scores'))
if(localTasks){
	const localTasks = JSON.parse(localStorage.getItem('scores'))
	var highScore = localTasks

}
else{

	var highScore = [{'culture':0,'histoire':0,'espace':0}]
	localStorage.setItem('scores',JSON.stringify(highScore))
}




function QuestionDisplay(props){
	return(
		<div className="questions-display">
			<p className="question">{props.question}</p>
		</div>
	)
}

function RandomListGen(length){
	let arr = [];
	while(arr.length < 15){
		let r = Math.floor(Math.random() * 18) + 1;
		if(arr.indexOf(r) === -1) arr.push(r);
	}
	return arr
}

function RandomGen(){
	let arr = [];
	while(arr.length < 3){
		let r = Math.floor(Math.random() * 3) + 1;
		if(arr.indexOf(r) === -1) arr.push(r);
	}
	return arr
}

function ButtonGenerator(props){
	const listn = RandomGen()
	let n = 0
	let list = [undefined,undefined,undefined]
	for(const item in props.spaceData[props.num].answer){
		if(item === 'good-answer'){
			let btn = <button className="answer-btn good" key={n} onClick={props.click}>{props.spaceData[props.num].answer[item]}</button>
			list[listn[n]] = btn 
			n++

		}
		else{
			
			let btn = <button className="answer-btn bad" key={n} onClick={props.click}>{props.spaceData[props.num].answer[item]}</button>
			list[listn[n]] = btn 
			n++
		}
	}
	return(
		<div className="answer-container">{list}</div>
	)
}

function Title(props){
	let lst = []
	let n = 0
	if(props.name=='culture'){
		let block = <p key={n} className="category-name cb">Culture Générale</p>
		lst.push(block)
	}
	else if(props.name=='histoire'){
		let block = <p key={n} className="category-name ca">Histoire</p>
		lst.push(block)
	}
	else if(props.name=='espace'){
		let block = <p key={n} className="category-name cc">Espace</p>
		lst.push(block)
	}
	return(
		<div className='infos'>{lst}</div>
	)
}





function App(props){
	const [randomList,setRandomList] = useState(RandomListGen())
	const [btnList,setBtnList] = useState(RandomGen())
	const [score,setScore] = useState(0)
	const [scoreMissed,setScoreMissed] = useState(0)
	const [secList,setSecList] = useState(RandomGen())
	const [end,setEnd] = useState(false)



	const nextQuestion=(e)=>{
		let tv = randomList
		if(tv.length>1){
			const lastIndex = randomList.length -1
			setRandomList(tv.filter((tv,index)=>index!== lastIndex))
		}
		else if(tv.length<=1){
			setEnd(true)
		}
	}

	const update = ()=>{
		let tv = randomList
		if(randomList.length+1<=2){
			let allBtns = document.querySelectorAll(".answer-btn")
			for(let i = 0;i<allBtns.length;i++){
				allBtns[i].disabled = true
			}
			setTimeout(() => {
				root.render(<FinalScore fnScore={score}></FinalScore>)
			}, 2000);
		}
	}

	const handleClick=(e)=>{
		if(e.target.className=='answer-btn good'){
			setScore(score+1)
			nextQuestion(e)
			if(randomList.length+1>=2){
			}
		}
		else if(e.target.className=='answer-btn bad'){
			let ts = score
			setScoreMissed(scoreMissed+1)
			nextQuestion(e)
			if(randomList.length+1>=2){
			}
		}
	}

	const back=()=>{
		root.render(<ChoiceMenu></ChoiceMenu>)
	}

	useEffect(()=>{
		let highCategory = props.category
		let tv = randomList
		if(score>highScore[0][highCategory]){
			highScore[0][highCategory] = score
			localStorage.setItem('scores',JSON.stringify(highScore))
		}
		if(randomList.length<=1 && end===true){
			let allBtns = document.querySelectorAll(".answer-btn")
			for(let i = 0;i<allBtns.length;i++){
				allBtns[i].disabled = true
			}
			root.render(<FinalScore fnScore={score}></FinalScore>)
		}

	},[score,scoreMissed])

	

	return(
		<div>
			<Title name={props.category}></Title>
			<QuestionDisplay question={props.spaceData[randomList[randomList.length-1]].question}></QuestionDisplay>
			<ButtonGenerator num={randomList[randomList.length-1]} spaceData={props.spaceData} click={handleClick}></ButtonGenerator>
			<button className="category-btn d" id='main-menu-back' onClick={back}>Retour</button>
		</div>
	)
}

export default App