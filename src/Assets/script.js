// var data = [{'question':'Combien de planètes orbitent autour du Soleil ?','answer':{'bad-answer':'10','good-answer':'8','bad-answer2':'12'}}]

// var qs = document.createElement('p')
// qs.textContent = data[0].question
// var body = document.querySelector('body')
// var mylist = []
// body.append(qs)

// for(item in data[0].answer){
// 	console.log( data[0].answer[item]);
// 	mylist.push(data[0].answer[item])
// 	let btn = document.createElement('button')
// 	btn.className = 'answer-btn'
// 	if(item==='good-answer'){
// 		btn.addEventListener('click',()=>{
// 			btn.className = 'answer-btn good'
// 			var allBtn = document.querySelectorAll('.answer-btn')
// 			console.log(allBtn.className);
// 			for(let i = 0;i<allBtn.length;i++){
// 				if(allBtn[i].className != 'answer-btn good'){
					
// 					allBtn[i].className = 'answer-btn bad'
// 					allBtn[i].disabled = true
// 				}
// 			}
			
			
// 		})
// 	}
// 	else{
		
// 		btn.addEventListener('click',()=>{
// 			btn.className = 'answer-btn bad'
// 			var allBtn = document.querySelectorAll('.answer-btn')
// 			for(let i = 0;i<allBtn.length;i++){
// 				if(allBtn[i].className == 'answer-btn good'){

// 					allBtn[i].className = 'answer-btn good'
// 					allBtn[i].disabled = true
// 				}
// 				else{
					
// 					allBtn[i].className = 'answer-btn bad'
// 					allBtn[i].disabled = true
// 				}
// 			}
// 		})
// 	}
// 	btn.textContent = (data[0].answer[item])
// 	body.append(btn)
// }