
const resultCal = (inputString) => {
    let PreviosModifiedString = inputString;//Modified String Previos State Value
    let newModifiedString = inputString;//Modified String Current State Value

    // Check for any divison and return result if there is any
    
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkDivison(newModifiedString);
        console.log(`newModifiedString`, newModifiedString);
    }

    // Modify Value on the desired String Value;
    newModifiedString = PreviosModifiedString;

    // Check for any Multiplication and return result if there is any
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkMultiply(newModifiedString);
        console.log(`newModifiedString`, newModifiedString);
    }
    
    // Modify Value on the desired String Value;
    newModifiedString = PreviosModifiedString;

    // Check for any Sub and return result if there is any 
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkSub(newModifiedString);
        console.log(`newModifiedString`, newModifiedString);
    }
    
    // // Modify Value on the desired String Value;
    newModifiedString = PreviosModifiedString;
    // // Check for any Addition and return result if there is any
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkAdd(newModifiedString);
        console.log(`newModifiedString`, newModifiedString);
    }



    
    document.getElementById("compute").innerText = PreviosModifiedString;
    
     
}

// Divison Checking And Calucting Function
const checkDivison = (input) => {
    console.log(`input`, input)
    let finalResultString = input;
    let operatorIndex = finalResultString.indexOf("/");
    let leftValue = ''; // Value Left to the operator
    let rightValue = ''; //Value Right to the operator
    var result = 0 ; //Left value (operator) RightValue
    
    if( operatorIndex === -1){
        return -1;
    }
    
    // Loop Through Each left Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex-1; index >= 0; index--) {

        if(finalResultString[index] === "+" ||  finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }
        leftValue += finalResultString[index];
    } 

    // Loop Through Each Right Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex+1; index < finalResultString.length; index++) {
          
        if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }
        
        rightValue += finalResultString[index];
    } 

    result = (Number(leftValue.split("").reverse().join("")) / Number(rightValue));
    finalResultString = finalResultString.replace(`${leftValue.split("").reverse().join("")}/${rightValue}`, `${result}`)
    
    return finalResultString
}

// Multiplication Checking And Calucting Function
const checkMultiply = (input) => {
    
    let finalResultString = input;
    let operatorIndex = finalResultString.indexOf("*");
    let leftValue = ''; // Value Left to the operator
    let rightValue = ''; //Value Right to the operator
    var result = 0 ; //Left value (operator) RightValue
    
    if( operatorIndex === -1){
        return -1;
    }
    
    // Loop Through Each left Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex-1; index >= 0; index--) {

        if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }
        
        leftValue += finalResultString[index];
    } 

    // Loop Through Each left Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex+1; index < finalResultString.length; index++) {
          
        if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }
        
        rightValue += finalResultString[index];
    } 
    
    
    result = (Number(leftValue.split("").reverse().join("")) * Number(rightValue));
    finalResultString = finalResultString.replace(`${leftValue.split("").reverse().join("")}*${rightValue}`, `${result}`)
    
    return finalResultString
}


// Addition Checking And Calucting Function
const checkAdd = (input) => {
    
    let finalResultString = input;
    let operatorIndex = finalResultString.indexOf("+");
    let leftValue = ''; // Value Left to the operator
    let rightValue = ''; //Value Right to the operator
    var result = 0 ; //Left value (operator) RightValue
    let isNegative = false;
    if( operatorIndex === -1){
        return -1;
    }
    
    
    // Loop Through Each left Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex-1; index >= 0; index--) {

        if(finalResultString[index] === "+" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }else if(finalResultString[index] === "-" && finalResultString.indexOf("-") === 0){
            isNegative = true;
            break;
        }else if(finalResultString[index] === "-"){
            break
        }    
        leftValue += finalResultString[index];
    } 

    // Loop Through Each Right Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex+1; index < finalResultString.length; index++) {
          
        if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }
        
        rightValue += finalResultString[index];
    } 
    
    if(isNegative){
        
        result = ( -(Number(leftValue.split("").reverse().join(""))) + Number(rightValue));
        finalResultString = finalResultString.replace(`-${leftValue.split("").reverse().join("")}+${rightValue}`, `${result}`);
        return finalResultString;

    }
    result = (Number(leftValue.split("").reverse().join("")) + Number(rightValue));
    finalResultString = finalResultString.replace(`${leftValue.split("").reverse().join("")}+${rightValue}`, `${result}`);
    
    return finalResultString;
}

// Subtraction Checking And Calucting Function
const checkSub = (input) => {
    let finalResultString = input;
    let operatorIndex = finalResultString.indexOf("-");
    let leftValue = ''; // Value Left to the operator
    let rightValue = ''; //Value Right to the operator
    var result = 0 ; //Left value (operator) RightValue
    let isNegative = false; 
    if( operatorIndex === -1 ) {
        return -1; //terminating Value
    }
    
    // Check If there Is Only One negative Value
    // ("str1,str2,str3,str4".match(/,/g) || []).length
    if((finalResultString.match(/-/g) || []).length === 1 && operatorIndex === 0){
        return -1
    }
    // Check if there is anyOperator Right before or after -ve sign
    if((finalResultString[operatorIndex-1] === "+")||(finalResultString[operatorIndex+1] === "+")){
        return resolveMultipleOperator(finalResultString);
    }
    // Loop Through Each left Item From The Operator Index Until New Operator is not found
    for (let index = operatorIndex+1; index < finalResultString.length; index++) {
        
        if(finalResultString[index] === "+" || finalResultString[index] === "*" || finalResultString[index] === "/"){
            break
        }else if(finalResultString[index] === "-"){
            isNegative = true;
            break;
        }   
        
        rightValue += finalResultString[index];
    } 
    //If _ve sign is the first index value
    if(isNegative){
        return helperSubFunc(finalResultString);
    }
   // Loop Through Each left Item From The Operator Index Until New Operator is not found
   for (let index = operatorIndex-1; index >= 0; index--) {
   
        if(finalResultString[index] === "+" || finalResultString[index] === "*" || finalResultString[index] === "/"){

            break
        }    
        leftValue += finalResultString[index];
    } 





result = (Number(leftValue.split("").reverse().join("")) - Number(rightValue));
finalResultString = finalResultString.replace(`${leftValue.split("").reverse().join("")}-${rightValue}`, `${result}`);
console.log(`result`, finalResultString);
return finalResultString   
}

const resolveMultipleOperator = (input) => {
    const negativeIndex = input.indexOf("-");
    if(input[negativeIndex-1] === "+"){
        const newString = input.replace(input[negativeIndex-1],'');
        return newString;
    }
    
}
//HelperSub Function
const helperSubFunc = (input) => {
    
    let firstNegativeIndex = input.indexOf("-");
    let SecondNegativeIndex = input.indexOf("-",firstNegativeIndex+1);

    let leftNegativeValue = '';
    let rightNegativeValue = '';

    for (let index = firstNegativeIndex+1; index < SecondNegativeIndex ; index++) {

        leftNegativeValue += input[index];
    } 

    // Loop Through Each left Item From The Operator Index Until New Operator is not found
   for (let index = SecondNegativeIndex+1; index < input.length ; index++) {
    
        if(input[index] === "+" || input[index] === "-" ||input[index] === "*" || input[index] === "/"){

            break
        }    
        rightNegativeValue += input[index];
    }

    var result = (Number(leftNegativeValue)+ Number(rightNegativeValue))*-1;
    var finalResult =result.toString();

    input = input.replace(`-${leftNegativeValue}-${rightNegativeValue}`, `${finalResult}`)
    return input;
}