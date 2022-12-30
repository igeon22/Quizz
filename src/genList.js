function RandomListGen(){
	let arr = [];
	while(arr.length < 20){
		let r = Math.floor(Math.random() * 5) + 1;
		if(arr.indexOf(r) === -1) arr.push(r);
	}
	return arr
	console.log(arr);
}

let list = RandomListGen()

export default list