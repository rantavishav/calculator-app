
var operatorActive = false ;
var result = 0;
var currentValueInput ="";
var operatorValue = "";
// Any Calc Number Button
const calcButtonHandle = (event) => {
    const numberClicked = event.target.id;
    // Render this Number On the MAin Display Screen
    document.getElementById("compute").innerText += numberClicked;

    // Add This VAlue to currentValueInput
    currentValueInput += numberClicked;

}

// Delete Button
const delNumber = () =>{
    var computeString = document.getElementById("compute").innerText;
    
    if(computeString.length>0){
        computeString = computeString.slice(0,computeString.length-1);

        document.getElementById("compute").innerText = computeString;
    }  
}

// Reset Button
const resetButton = () => {
    // Reset Dispaly Screen
    document.getElementById("compute").innerText=0;
    
    // Reset Global varibale
    operatorActive = false ;
    result = 0;
    currentValueInput ="";
    operatorValue = "";
}

// Equal Button
const equalButton = () => {
    // Check Which Operator is Clicked ealier to calc result
    if(operatorValue === "+"){
        document.getElementById("compute").innerText = (result + Number(currentValueInput));
    }else if(operatorValue === "-"){
        document.getElementById("compute").innerText = (result - Number(currentValueInput));
    }else if(operatorValue === "x"){
        document.getElementById("compute").innerText = (result * Number(currentValueInput));
    }else if(operatorValue === "/"){
        document.getElementById("compute").innerText = (result / Number(currentValueInput));
    }
    

    // Rest The ActiveOperator Value
    operatorActive = false;

    
}

// Operator Buttons
const operatorButton = (event) => {
    
    if(operatorActive === false){
        // Set Operator value
        operatorValue = event.target.id;

        // Set Result To inial Input Value
        result =0;
        result += Number(document.getElementById("compute").innerText);
        
        // Reset CurrentVAlue
        currentValueInput = '';

        // Render respective Operator to display
        document.getElementById("compute").innerText += operatorValue;

    }

    operatorActive = true;
    console.log('result :>> ', result);
} 

// Theme Button 
const themeButton = (event) =>{
    if(event.target.id === "theme-1"){
        document.getElementById("theme-circle-1").style.visibility = "visible";
        document.getElementById("theme-circle-2").style.visibility = "hidden"; 
        document.getElementById("theme-circle-3").style.visibility = "hidden"; 

        // Change Stlye To Theme 1
        changeTheme(1);
    }else if(event.target.id === "theme-2"){
        document.getElementById("theme-circle-2").style.visibility = "visible";
        document.getElementById("theme-circle-1").style.visibility = "hidden";
        document.getElementById("theme-circle-3").style.visibility = "hidden";

        // Change Stlye To Theme 2
        changeTheme(2);
    }else if(event.target.id === "theme-3"){
        document.getElementById("theme-circle-3").style.visibility = "visible";
        document.getElementById("theme-circle-1").style.visibility = "hidden";
        document.getElementById("theme-circle-2").style.visibility = "hidden";

        // Change Stlye To Theme 3
        changeTheme(3);
    }
}

// Function Which Will Change Theme w.r.t the input (1,2,3)
const changeTheme = (themeNumber) => {
    if(themeNumber === 1){
        swapCssFile("./theme/theme-1.css");

    }else if(themeNumber === 2){
        swapCssFile("./theme/theme-2.css");
    }else if(themeNumber === 3){
        swapCssFile("./theme/theme-3.css")
    }
}

// Helper Function For Chanding Theme

const swapCssFile = (path) =>{
     //remove previous stylesheet
     document.querySelectorAll('[rel="stylesheet"]')[0].remove();
        
     // Add new Style sheet
     // Get HTML head element
     var head = document.getElementsByTagName('HEAD')[0]; 

     // Create new link Element
     var linkNode = document.createElement('link');

     // set the attributes for link element 
     linkNode.rel = 'stylesheet';  
     linkNode.type = 'text/css';
     linkNode.href = path; 

     // Append linkNode element to HTML head
     return head.appendChild(linkNode);
}

