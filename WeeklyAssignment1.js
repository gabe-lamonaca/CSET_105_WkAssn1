const prompt = require('prompt-sync')();

console.log("Please select your game type.\n \n Press 1 for Max Score\n Press 2 for Three-out\n");


let num = Number(prompt("Enter your choice: "));
if (num === 1){
    console.log("\nMax Score Mode! \nSelect your Challenge level!\n");
    let dif = Number(prompt("Diffiiculty: "))
    if (dif === 1){
        console.log("Difficulty Level Easy!\n");
        var score = 0
        var skip = "skip"
for(let a = 1; a < 20; a++){
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random( )* operators.length);
    const randomOperator = operators[randomIndex];
    let X = Math.floor(Math.random()*10);
    let Y = Math.floor(Math.random()*10);
    let equation = X + randomOperator + Y + " = ?"
    let answer = eval(`${X}${randomOperator}${Y}`)
    console.log(equation);
    let userinput = prompt()
    if (userinput === skip){
        continue;
    } 
    if(Number(userinput) === answer){
        score = score + 10
        console.log(`\nCorrect! Plus 10 points! You have ${score} points\n`)
        
    }
    else if(userinput !== answer){
        score = score - 5
        console.log(`\nIncorrect. Minus 5 points. You have ${score} points\n`)
    }
    }    
    }

    else if(dif === 2){
        console.log("Difficulty Level Medium!\n");
        var score = 0
        var skip = "skip"
for(let a = 1; a < 20; a++){
    // random + or - operator
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random( )* operators.length);
    const randomOperator = operators[randomIndex];
    // random *, /, or % operator
    const operators2 = ['*', '/', '%'];
    const randomIndex2 = Math.floor(Math.random( )* operators2.length);
    const randomOperator2 = operators2[randomIndex2];
   
    let X = Math.floor(Math.random()*100);
    let Y= Math.floor(Math.random()*100);
    let X2 = Math.floor(Math.random()*10);
    let Y2 = Math.floor(Math.random()*10);
    let equation = X + randomOperator + Y + " = ?"
    let equation2 = X2 + randomOperator2 + Y2 + " = ?"
    // selecting random equation
    const equations =[X + randomOperator + Y + " = ?", X2 + randomOperator2 + Y2 + " = ?" ];
    const randomIndex3 = Math.floor(Math.random()* equations.length);
    const randomEquation = equations[randomIndex3]
    let answer = eval(`${X}${randomOperator}${Y}`)
    let answer2 = Number(eval(`${X2}${randomOperator2}${Y2}`))
    console.log(randomEquation);
    if(randomOperator2 === '/' && Y2 === 0){
        console.log(randomEquation);
    }
    let userinput = prompt()
    if (userinput === skip){
        continue;
    } 
    if(Number(userinput) === answer || answer2){
        score = score + 10
        console.log(`\nCorrect! Plus 10 points! You have ${score} points\n`)
        
    }
    else if(userinput !== answer){
        score = score - 5
        console.log(`\nIncorrect. Minus 5 points. You have ${score} points\n`)
    }
    }    
    }
        else if(dif === 3){
        console.log("Difficulty Level Hard!\n");
        var score = 0
        var skip = "skip"
for(let a = 1; a < 20; a++){
    // random + or - operator
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random( )* operators.length);
    const randomOperator = operators[randomIndex];
    // random *, /, or % operator
    const operators2 = ['*', '/', '%'];
    const randomIndex2 = Math.floor(Math.random( )* operators2.length);
    const randomOperator2 = operators2[randomIndex2];
   
    let X = Math.floor(Math.random()*1000);
    let Y= Math.floor(Math.random()*1000);
    let X2 = Math.floor(Math.random()*100);
    let Y2 = Math.floor(Math.random()*10);
    let equation = X + randomOperator + Y + " = ?"
    let equation2 = X2 + randomOperator2 + Y2 + " = ?"
    // selecting random equation
    const equations =[X + randomOperator + Y + " = ?", X2 + randomOperator2 + Y2 + " = ?" ];
    const randomIndex3 = Math.floor(Math.random()* equations.length);
    const randomEquation = equations[randomIndex3]
    let answer = eval(`${X}${randomOperator}${Y}`)
    let answer2 = eval(`${X2}${randomOperator2}${Y2}`)
    console.log(randomEquation);
    if(randomOperator2 === '/' && Y2 === 0){
        console.log(randomEquation);
    }
    let userinput = prompt()
    if (userinput === skip){
        continue;
    } 
    if(Number(userinput) === answer || answer2){
        score = score + 10
        console.log(`\nCorrect! Plus 10 points! You have ${score} points\n`)
        
    }
    else if(userinput !== answer || answer2){
        score = score - 5
        console.log(`\nIncorrect. Minus 5 points. You have ${score} points\n`)
    }
    }    
    }
}

if(num === 2){
    console.log("\nThree-out Mode! \nSelect your Challenge level!\n");
    let dif = Number(prompt("Diffiiculty: "))
    if (dif === 1){
        console.log("Difficulty Level Easy!");
        var score = 0
        var lives = 3
for(let a = 1; a < Infinity; a++){
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random( )* operators.length);
    const randomOperator = operators[randomIndex];
    let X = Math.floor(Math.random()*10);
    let Y = Math.floor(Math.random()*10);
    let equation = X + randomOperator + Y + " = ?"
    let answer = eval(`${X}${randomOperator}${Y}`)
    console.log(equation);
    let userinput = prompt()
    if(Number(userinput) === answer){
        score = score + 10
        console.log(`\nCorrect! Plus 10 points! You have ${score} points\n`)
        
    }
    else if(userinput !== answer){
        lives = lives - 1
        console.log(`\nIncorrect. Minus 1 life. You have ${lives} left!\n`)
    }
    if(lives === 0){
        console.log(`Last life lost, your final score was ${score} better luck next time!`)
        break;
    }
    }    
    }

    else if(dif === 2){
        console.log("Difficulty Level Medium!")
        var score = 0
        var lives = 3
for(let a = 1; a < Infinity; a++){
    // random + or - operator
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random( )* operators.length);
    const randomOperator = operators[randomIndex];
    // random *, /, or % operator
    const operators2 = ['*', '/', '%'];
    const randomIndex2 = Math.floor(Math.random( )* operators2.length);
    const randomOperator2 = operators2[randomIndex2];
   
    let X = Math.floor(Math.random()*100);
    let Y= Math.floor(Math.random()*100);
    let X2 = Math.floor(Math.random()*10);
    let Y2 = Math.floor(Math.random()*10);
    let equation = X + randomOperator + Y + " = ?"
    let equation2 = X2 + randomOperator2 + Y2 + " = ?"
    // selecting random equation
    const equations =[X + randomOperator + Y + " = ?", X2 + randomOperator2 + Y2 + " = ?" ];
    const randomIndex3 = Math.floor(Math.random()* equations.length);
    const randomEquation = equations[randomIndex3]
    let answer = eval(`${X}${randomOperator}${Y}`)
    let answer2 = Number(eval(`${X2}${randomOperator2}${Y2}`))
    console.log(randomEquation);
    if(randomOperator2 === '/' && Y2 === 0){
        console.log(randomEquation);
    }
    let userinput = prompt()
    if(Number(userinput) === answer || answer2){
        score = score + 10
        console.log(`\nCorrect! Plus 10 points! You have ${score} points\n`)
        
    }
    else if(userinput !== answer){
        lives = lives - 1
        console.log(`\nIncorrect. Minus 1 life. You have ${lives} left!\n`)
    }
    if(lives === 0){
        console.log(`Last life lost, your final score was ${score} better luck next time!`)
        break;
    }
    }    
    }
    else if(dif === 3){
        console.log("Difficulty Level Hard!")
        var score = 0
        var lives = 3
for(let a = 1; a < Infinity; a++){
    // random + or - operator
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random( )* operators.length);
    const randomOperator = operators[randomIndex];
    // random *, /, or % operator
    const operators2 = ['*', '/', '%'];
    const randomIndex2 = Math.floor(Math.random( )* operators2.length);
    const randomOperator2 = operators2[randomIndex2];
   
    let X = Math.floor(Math.random()*1000);
    let Y= Math.floor(Math.random()*1000);
    let X2 = Math.floor(Math.random()*100);
    let Y2 = Math.floor(Math.random()*10);
    let equation = X + randomOperator + Y + " = ?"
    let equation2 = X2 + randomOperator2 + Y2 + " = ?"
    // selecting random equation
    const equations =[X + randomOperator + Y + " = ?", X2 + randomOperator2 + Y2 + " = ?" ];
    const randomIndex3 = Math.floor(Math.random()* equations.length);
    const randomEquation = equations[randomIndex3]
    let answer = eval(`${X}${randomOperator}${Y}`)
    let answer2 = Number(eval(`${X2}${randomOperator2}${Y2}`))
    console.log(randomEquation);
    if(randomOperator2 === '/' && Y2 === 0){
        console.log(randomEquation);
    }
    let userinput = prompt()
    if(Number(userinput) === answer || answer2){
        score = score + 10
        console.log(`\nCorrect! Plus 10 points! You have ${score} points\n`)
        
    }
    else if(userinput !== answer){
        lives = lives - 1
        console.log(`\nIncorrect. Minus 1 life. You have ${lives} left!\n`)
    }
    if(lives === 0){
        console.log(`Last life lost, your final score was ${score} better luck next time!`)
        break;
    }
    }    
    }
    }
    else if(dif === NaN){
        console.log("Please Enter a Valid Option!")
    }
else if(num > 2 || NaN){
    console.log("Please Select a Valid Option")
}