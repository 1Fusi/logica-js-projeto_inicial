alert('Welcome to the secret number game');
let maxNumber = 320
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let guess;
let attempts = 0;
//implementar um laço while para continuar repetindo até acertar, também colocar um contador para verificar o número de tentativas.

while (guess != secretNumber) {
    guess = parseInt(prompt(`Chose a number from 1 to ${maxNumber}`));
    attempts++;
    if (secretNumber == guess) {
        break;
    } else {
        if (guess > secretNumber) {
            alert(`The secret number is less than ${guess}`);
        } else {
            alert(`The secret number is higher than ${guess}`);
        }
    }    
}

let wordAtempts = attempts > 1 ? 'attempts' : 'attempt';
alert(`Congratulations your guess was right! The secret number is ${secretNumber} and you only needed ${attempts} ${wordAtempts} to get it right!`);
