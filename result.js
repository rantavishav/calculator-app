
const resultCal = (inputString) => {
    let PreviosModifiedString = inputString;//Modified String Previos State Value
    let newModifiedString = inputString;//Modified String Current State Value

    // Check for any divison and return result if there is any
    // console.log(checkDivison(inputString));
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkDivison(newModifiedString);
        console.log(`newModifiedString`, newModifiedString)
    }

    // Modify Value on the desired String Value;
    newModifiedString = PreviosModifiedString;

    // Check for any Multiplication and return result if there is any
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkMultiply(newModifiedString);
    }
    
    // Modify Value on the desired String Value;
    newModifiedString = PreviosModifiedString;

    // Check for any Addition and return result if there is any
    while(newModifiedString !== -1){
        PreviosModifiedString = newModifiedString;
        newModifiedString = checkAdd(newModifiedString);
    }

    // Modify Value on the desired String Value;
    newModifiedString = PreviosModifiedString;

    // Check for any Sub and return result if there is any
    // console.log(`return`, checkSub(newModifiedString))
    // while(newModifiedString !== -1){
    //     PreviosModifiedString = newModifiedString;
    //     newModifiedString = checkSub(newModifiedString);
    // }
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
    
    console.log(`leftValue, rightValue`, `${leftValue.split("").reverse().join("")}/${rightValue}`);
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
    
    
    result = (Number(leftValue.split("").reverse().join("")) + Number(rightValue));
    finalResultString = finalResultString.replace(`${leftValue.split("").reverse().join("")}+${rightValue}`, `${result}`)
    
    return finalResultString
}

// Subtraction Checking And Calucting Function
// const checkSub = (input) => {
    
//     let finalResultString = input;
//     let operatorIndex = finalResultString.indexOf("-");
//     let leftValue = ''; // Value Left to the operator
//     let rightValue = ''; //Value Right to the operator
//     var result = 0 ; //Left value (operator) RightValue
    
//     if( operatorIndex === -1 ) {
//         return -1;
//     }
    
//     if( operatorIndex === 0){
//        // Loop Through Each Right Item From The Operator Index Until New Operator is not found
//         for (let index = operatorIndex+1; index < finalResultString.length; index++) {
          
//             if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){
//                 break
//             }      
//             rightValue += finalResultString[index];
//     }
//     rightValue = -(rightValue)   
//     }else{
//         // Loop Through Each left Item From The Operator Index Until New Operator is not found
//     for (let index = operatorIndex-1; index >= 0; index--) {

//         if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

//             break
//         }
        
//         leftValue += finalResultString[index];
//     } 
//         // Loop Through Each Right Item From The Operator Index Until New Operator is not found
//     for (let index = operatorIndex+1; index < finalResultString.length; index++) {
          
//         if(finalResultString[index] === "+" || finalResultString[index] === "-" || finalResultString[index] === "*" || finalResultString[index] === "/"){

//             break
//         }
        
//         rightValue += finalResultString[index];
//     } 
//     }
    
    
    
//     console.log(`object`,`${leftValue.split("").reverse().join("")}-${rightValue}`)
//     result = (Number(leftValue.split("").reverse().join("")) - Number(rightValue));
//     finalResultString = finalResultString.replace(`${leftValue.split("").reverse().join("")}-${rightValue}`, `${result}`)
    
//     return finalResultString
// }