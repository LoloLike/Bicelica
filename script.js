let word = "алгоритм";
let checked_letters = [];
let attempts = 3;
let out = "";
let inGame = document.querySelector(".word").value; 

for (let i = 0; i < word.length; i ++){
	out = out + "*";
}


document.querySelector(".word").disabled = true;  
document.querySelector(".letter").disabled = true;  
document.querySelector(".check").disabled = true;  

document.querySelector("span").innerHTML = attempts;

document.querySelector(".word").value = out;

document.querySelector(".start").onclick = function(){
	document.querySelector(".letter").value = "";
	document.querySelector(".letter").focus();
	checked_letters = [];
	let out = "";

	for (let i = 0; i < word.length; i ++){
		out = out + "*";
	}

document.querySelector(".start").innerHTML = "Новая игра"; 

	document.querySelector(".word").value = out;

	document.querySelector(".letter").disabled = false;
	document.querySelector(".check").disabled = false;
	attempts = 3;
	document.querySelector("span").innerHTML = attempts;
};

document.querySelector(".check").onclick = function(){



if (inGame != "") {
document.querySelector(".word").value = out;
} 



	let letter = document.querySelector(".letter").value;
	checked_letters.push(letter);
	let out = "";
	for(let i = 0; i < word.length; i ++){
		if (checked_letters.indexOf(word[i]) != -1) {
			out = out + word[i];
		} else {
			out = out + "*";
		};
	};
	document.querySelector(".word").value = out;
	document.querySelector(".letter").value = "";
	document.querySelector(".letter").focus();

	if (word.indexOf(letter) == -1) {
		attempts = attempts - 1;
		document.querySelector("span").innerHTML = attempts;
	};

	if (attempts == 0) {
		document.querySelector(".letter").disabled = true;
		document.querySelector(".check").disabled = true;

	}

	console.log(attempts)


	if (word == out) { 
	document.querySelector(".check").disabled = true; 
	document.querySelector(".letter").disabled = true;
	 }

};






// let - переменная

// document.querySelector это надо для нахождения файла

// for - для того что бы выполнить какое-то действие 

// if если это то так делать

// else во всех остальных случаях

// console.log - для выведения в консоль
