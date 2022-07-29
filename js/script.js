var randomLoc = Math.floor(Math.random() * 10)
var locationOne = randomLoc
var locationTwo = locationOne + 1
var locationThree = locationTwo + 1
var guess;// номер поточної спроби
var hits = 0; // кількість попадань
var guesses = 0; //кількість спроб
var isSunk = false;// знищення корабля
var lose = 5;
while (isSunk == false) {
    guess = prompt("Ну що готовий? Виберай координату 0-10:");
    
    if (guess < 0 || guess > 10) { //перевірка відповідності координат
        alert("Вибери коректну координату!");
    } else {
        guesses = guesses + 1;// підрахунок спроб
        if (guess == locationOne || guess == locationTwo || guess == locationThree){
            alert("Влучив!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Ти знищив мій корабель!");
                alert("Ти виграв тобі знадобилося: "  + guesses + "спроб");
                break;
            }
            
        } else {
            alert("Промазав");
        }
        if (guesses == lose){
            //isSunk = false;
            alert("Ти програв!");
            alert("Ти програв тобі знадобилося: "  + guesses + "спроб");
            break;
        }
    }
}



