const minNum = 1;
const maxNum = 100;
const mySubmit = document.getElementById("mySubmit");
const success = document.getElementById("success");
const failure = document.getElementById("failure");

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
console.log(answer);
mySubmit.onclick = function() {
    let guessInput = document.getElementById("guess").value;
    let guess = parseInt(guessInput);

    if (isNaN(guess)) {
        window.alert("Not a Number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a number between 1-100");
    } else {
        attempts++;
        if (guess < answer) {
            failure.textContent = "Go Higher";
        } else if (guess === answer) {
            success.textContent = `Congrats! You've done it in ${attempts} attempts.`;
        } else if (guess > answer) {
            failure.textContent = "Go Lower";
        }
    }
};