let userName = "Daniel";
let myName = prompt("Please enter your name: ");
let GuessingGame = prompt("How much Bacon do I have? Pick a numnber 1-100");
let correctAnswer = 55;
let attempts = 5;

function displayRating() {
    let output = "";
    let rating = prompt("how many stars will you rate the Bacon Master?");
    for (let i = 0; i<rating; i++){
        output += "🌟";
    }
    return document.write(output);
}

for (let i = 0; i<attempts; i++){
    while (GuessingGame < 1 || GuessingGame > 100){
        GuessingGame = prompt("Please try again...! Pick again.");
    }
    if (GuessingGame == correctAnswer){
        alert("WE HAVE A WINNER!!");
        document.write("The Champ!");
        break;
    }
    else if (GuessingGame > correctAnswer){
        GuessingGame = prompt("Sorry too high. Try again.");
    }
    else if (GuessingGame < correctAnswer){
        GuessingGame = prompt("Sorry too low. Try again.");
    }
    if (i==4){
        alert("sorry no dice.");
    }
}

console.log("myName: ", myName);

if(myName == "Daniel"){
    document.write("Welcome back BACON MASTER!")
}
else{
    document.write("Welcome, " + myName)
}
