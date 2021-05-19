var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? \n");

console.log("\nWelcome " + userName + " to DO YOU KNOW Prashant? ");
console.log("\nlet's start the questions");
console.log("----------------------------\n");

var score = 0;

var highScores = [
	{
		name: "Prashant",
		score: 5,
	},
];

function play(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toUpperCase() === answer.toUpperCase()) {
		console.log("Right Answer!!!");
		score = score + 1;
	} else {
		console.log("Wrong Answer!!!");
	}

	console.log("Current score : ", score);
	console.log("----------------------------");
}

var questions = [
	{
		question: "Am I older than 25? (yes/no)",
		answer: "no",
	},
	{
		question: "Do I live in Pune? (yes/no)",
		answer: "yes",
	},
	{
		question: "Who is my favourite superhero? (thor/ironman) ",
		answer: "thor",
	},
	{
		question: "My favourite web series? (got/lucifer) ",
		answer: "got",
	},
	{
		question: "Where do I work? (tcs/infy) ",
		answer: "tcs",
	},
];

for (var i = 0; i < questions.length; i++) {
	var currentQuestion = questions[i];
	play(currentQuestion.question, currentQuestion.answer);
}

console.log("\nYAY... You scored ", score, " out of ", questions.length);

if (score >= highScores[0].score) {
	console.log("\nYou beat the highScore...!!!!!");
}
if (score > 2) {
	console.log("\nNice... You know me well!!!");
} else {
	console.log("\nhuhhhmmmmmm.... We should hang out buddy!!!");
}
