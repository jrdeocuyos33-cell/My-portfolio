const minNum = 50;
const maxNum = 100;

let answer = Math.floor(Math.random()*(maxNum -minNum + 1) + minNum);
let running_attemps = 0;
let running = true;
let guess;

while(running){
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));

    if (isNaN(guess)){
        window.alert(`Put a Number please`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Enter a Number between ${minNum} and  ${maxNum}`);
    }
    else {
        running_attemps ++;
        if (guess < answer){
            window.alert("Thou hast fallen beneath the mark; rise, and attempt again");
        }
       else if ( guess > answer){
        window.alert("Beyond the bounds of measure—another attempt, good sir!");
    }
        else {
            window.alert(`Thou hast emerged victorious! The answer was ${answer}, and after ${running_attemps} attempts, thou hast wrested victory from the jaws of defeat. Rejoice, thou magnificent victor!`);
            again = window.confirm(`I Dare you to Play Again!`);
            if (again){
                running = true;
                running_attemps = 0;
                answer = Math.floor(Math.random()*(maxNum -minNum + 1) + minNum);
                window.alert("Good choice you won't regret It! ");
            }
            else {
                running = false;
                window.alert("You Decided to Give up?! I see your like the others");
            }
       
       
        }

    
    
    
    }
}