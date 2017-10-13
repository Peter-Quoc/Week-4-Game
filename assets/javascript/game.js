$(document).ready(function () {

var PlayerCharacter = false;
var EnemyCharacter = false;

var Harry = {
	name: "Harry Potter",
	image: "assets/images/Harry.jpg",
	hitpoints: 200,
	attacks: ["Expelliarmus", "Stupify", "Protego", "Reducto"],
	attackPower: [8, 6, 0, 7]
}

var Hermione = {
	name: "Hermione Granger",
	image: src="assets/images/Hermione.jpg",
	hitpoints: 140,
	attacks: ["Expelliarmus", "Stupify", "Protego", "Reducto"]
}

var Ron = {
	name: "Ron Weasley",
	image: src="assets/images/Ron.jpg",
	hitpoints: 120,
	attacks: ["Expelliarmus", "Stupify", "Protego", "Reducto"]
}

var Voldemort = {
	name: "Lord Voldemort",
	image: src="assets/images/Voldemort.jpg",
	hitpoints: 200,
	attacks: ["Avada Kedavra", "Crucio", "Imperio"]
}

var Nagini = {
	name: "Nagini",
	image: src="assets/images/Nagini.jpg",
	hitpoints: 140,
	attacks: ["Avada Kedavra", "Crucio", "Imperio"]
}

var Bellatrix = {
	name: "Bellatrix Lastrange",
	image: src="assets/images/Bellatrix.jpg",
	hitpoints: 120,
	attacks: ["Avada Kedavra", "Crucio", "Imperio"]
}

function characterData (character) {
	var characterStats = $("#character").html("<h4>" + character.name + "</h4><img src=" + character.image + " height='140px' width='190px'><br>HP: " + character.hitpoints);
	console.log(character.name);
}

//NEED TO MAKE INTO FUNCTION
console.log(Harry.attacks);

var HarryStats = $("#Harry").html("<h4>" + Harry.name + "</h4><img src=" + Harry.image + " height='140px' width='190px'><br>HP: " + Harry.hitpoints);

var HermioneStats = $("#Hermione").html("<h4>" + Hermione.name + "</h4><img src=" + Hermione.image + " height='140px' width='190px'><br>HP: " + Hermione.hitpoints);

var RonStats = $("#Ron").html("<h4>" + Ron.name + "</h4><img src=" + Ron.image + " height='140px' width='190px'><br>HP: " + Ron.hitpoints);

var VoldemortStats = $("#Voldemort").html("<h4>" + Voldemort.name + "</h4><img src=" + Voldemort.image + " height='140px' width='190px'><br>HP: " + Voldemort.hitpoints);

var NaginiStats = $("#Nagini").html("<h4>" + Nagini.name + "</h4><img src=" + Nagini.image + " height='140px' width='190px'><br>HP: " + Nagini.hitpoints);

var BellatrixStats = $("#Bellatrix").html("<h4>" + Bellatrix.name + "</h4><img src=" + Bellatrix.image + " height='140px' width='190px'><br>HP: " + Bellatrix.hitpoints);

//NEED TO MAKE INTO FUNCTION
if (!PlayerCharacter) {
	$("#Harry").on("click", function(event){
		$(".ChosenPlayer").addClass("SelectedPlayer")
		$(".ChosenPlayer").html(HarryStats)
		PlayerCharacter = true;
	});

	$("#Hermione").on("click", function(event){
		$(".ChosenPlayer").addClass("SelectedPlayer")
		$(".ChosenPlayer").html(HermioneStats)
		PlayerCharacter = true;
	});

	$("#Ron").on("click", function(event){
		$(".ChosenPlayer").addClass("SelectedPlayer")
		$(".ChosenPlayer").html(RonStats)
		PlayerCharacter = true;
	});
}

if(!EnemyCharacter) {
	$("#Voldemort").on("click", function(event){
		$(".ChosenEnemy").addClass("SelectedEnemy")
		$(".ChosenEnemy").html(VoldemortStats)
		EnemyCharacter = true;
	});

	$("#Nagini").on("click", function(event){
		$(".ChosenEnemy").addClass("SelectedEnemy")
		$(".ChosenEnemy").html(NaginiStats)
		EnemyCharacter = true;
	});

	$("#Bellatrix").on("click", function(event){
		$(".ChosenEnemy").addClass("SelectedEnemy")
		$(".ChosenEnemy").html(BellatrixStats)
		EnemyCharacter = true;
	});
}

// if(EnemyCharacter === true && Player Character === true) {
// 	var AttackButton = $("<button");

// }

// $(".Attack").on("click", function(event) {
// 	var AttackDamage = Math.floor(Math.random() * 1)
// });


});