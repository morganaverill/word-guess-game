var words = [
    "bender",
    "rosie",
    "helper",
    "voltron",
    "dolores"
]

//Empty variables
    var random = "";
    var letters = []
    var blanks = 0;
    var correctWord = [];
    var badGuess = [];

//Counters
    var wins = 0;
    var losses = 0;
    var chances = 9;

    function Game() {
// computer generates random word
    random = words[Math.floor(Math.random() * words.length)];

// split the individual word into separate arrays. --Something my tutor showed me 
    letters = random.split("");

// store length of word
    blanks = letters.length;

// create loop to generate "_" for each letter in array -- Tutor help
    for (var i = 0; i < blanks; i++) {
        correctWord.push("_");
    }

// showing the "_" on screen -- StackOverFlow
    document.getElementById("word").innerHTML = "  " + correctWord.join("  ");

// console logging 
    console.log(random);
    console.log(letters)
    console.log(blanks)
    console.log(correctWord)
    }

    function reset() {
        chances = 9;
        badGuess = [];
        correctWord = [];
        Game()
    }

//If/Else, to see if letter selected matches random word -- Tutor also helped with this
    function checkLetters(letter) {
        var letterInWord = false;
//if the generated random is equal to the letter entered -- Tutor also helped with this
    for (var i = 0; i < blanks; i++) {
        if (random[i] == letter) {
            letterInWord = true;
        }
    }
//if letterInWord (false)
    if (letterInWord) {
//check each letter
        for (var i = 0; i < blanks; i++) {
            if (random[i] == letter) {
                correctWord[i] = letter;
            }
        }
    }
//or, reduce remaining guesses -- W3schools
    else {
        badGuess.push(letter);
        chances--;
    }
    console.log(correctWord);
}

//check player won... --- mixed from w3schools and StackOverflow 
    function complete() {

    //if Win
        if (letters.toString() == correctWord.toString()) {
            wins++;
            aud()
            reset()
    //display wins on screen
        document.getElementById("wingame").innerHTML = " " + wins;

    //if Lost
        } else if (chances === 0) {
            losses++;
            reset()
            //again a lot of trail and error and could not get html to show loss
        }
    //display losses
       //function would go here if I could figure it out -- was not working like display for win
}

//start game function
Game()

//check for keyup, and convert to lowercase -- Tutor Help
    document.onkeyup = function (event) {
        var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check if guess matches
        checkLetters(guesses);
    //process wins/loss 
        complete();
    //store player guess  
        console.log(guesses);

    //display bad guesses
        document.getElementById("badguesses").innerHTML = "  " + badGuess.join(" ")}

//variables for Audio for win -- found on StackOverFlow
    var b = document.getElementById("bender");
    var r = document.getElementById("rosie");
    var h = document.getElementById("helper");
    var v = document.getElementById("voltron");
    var d = document.getElementById("dolores");

    function aud() {
    //Bender AV
        if (random === words[0]) {
            b.play();
        }
    //Rosie AV
        else if (random === words[1]) {
            r.play();
        }
    //Helper AV
        else if (random === words[2]) {
            h.play();
        }
    //Voltron AV
        else if (random === words[3]) {
            v.play();
        }
    //Dolores AV
        else if (random === words[4]) {
            d.play();
        }

    //after alot of trial and error I could not figure out how to get images to appear
};