
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
    var rootNode= document.querySelector(':root');

    if(themeNumber === 1){
        // Chnage Toogle_circle Visbility
        document.getElementById("theme-circle-1").style.visibility = "visible";
        document.getElementById("theme-circle-2").style.visibility = "hidden";
        document.getElementById("theme-circle-3").style.visibility = "hidden";
        // Change Background Varibale Values
        rootNode.style.setProperty("--main-bg-color", `hsl(222, 26%, 31%)`); 
        rootNode.style.setProperty("--display-screen-bg", `hsl(224, 36%, 15%)`);  
        rootNode.style.setProperty("--keypad-bg", `hsl(223, 31%, 20%)`) ;

        // Change Key Variables Values
        rootNode.style.setProperty("--del-reset-bg", `hsl(225, 21%, 49%)`);
        rootNode.style.setProperty("--del-reset-box-shadow", `hsl(224, 28%, 35%)`);
        rootNode.style.setProperty("--toggle-color", `hsl(6, 63%, 50%)`);
        rootNode.style.setProperty("--toggle-box-shadow", `hsl(6, 70%, 34%)`);
        rootNode.style.setProperty("--buttons-bg", `hsl(30, 25%, 89%)`) ;
        rootNode.style.setProperty("--buttons-box-shadow", `hsl(28, 16%, 65%)`) ;

        // Chnage Text Variable Value
        rootNode.style.setProperty("--main-text-color",  `hsl(221, 14%, 31%)`);
        rootNode.style.setProperty("--main-title-color",  `hsl(0, 0%, 100%)`);
    }else if(themeNumber === 2){
        // Chnage Toogle_circle Visbility
        document.getElementById("theme-circle-1").style.visibility = "hidden";
        document.getElementById("theme-circle-2").style.visibility = "visible";
        document.getElementById("theme-circle-3").style.visibility = "hidden";

         // Change Background Varibale Values
         rootNode.style.setProperty("--main-bg-color", `hsl(0, 0%, 90%)`);
         rootNode.style.setProperty("--display-screen-bg", `hsl(0, 0%, 93%)`);
         rootNode.style.setProperty("--keypad-bg", `hsl(0, 5%, 81%)`);
 
         // Change Key Variables Values
         rootNode.style.setProperty("--del-reset-bg", `hsl(185, 42%, 37%)`);
         rootNode.style.setProperty("--del-reset-box-shadow", `hsl(185, 58%, 25%)`);
         rootNode.style.setProperty("--toggle-color", `hsl(25, 98%, 40%)`);
         rootNode.style.setProperty("--toggle-box-shadow", `hsl(25, 99%, 27%)`);
         rootNode.style.setProperty("--buttons-bg", `hsl(45, 7%, 89%)`);
         rootNode.style.setProperty("--buttons-box-shadow", `hsl(35, 11%, 61%)`);
 
         // Chnage Text Variable Value
         rootNode.style.setProperty("--main-text-color", `hsl(60, 10%, 19%)`);
         rootNode.style.setProperty("--main-title-color",  `hsl(60, 10%, 19%)`);
    }else if(themeNumber === 3){
        // Chnage Toogle_circle Visbility
        document.getElementById("theme-circle-1").style.visibility = "hidden";
        document.getElementById("theme-circle-2").style.visibility = "hidden";
        document.getElementById("theme-circle-3").style.visibility = "visible";

        // Change Background Varibale Values
        rootNode.style.setProperty("--main-bg-color", `hsl(268, 75%, 9%)`);
        rootNode.style.setProperty("--display-screen-bg", `hsl(268, 71%, 12%)`);
        rootNode.style.setProperty("--keypad-bg", `hsl(268, 71%, 12%)`);

        // Change Key Variables Values
        rootNode.style.setProperty("--del-reset-bg", `hsl(281, 89%, 26%)`);
        rootNode.style.setProperty("--del-reset-box-shadow", `hsl(285, 91%, 52%)`);
        rootNode.style.setProperty("--toggle-color", `hsl(176, 100%, 44%)`);
        rootNode.style.setProperty("--toggle-box-shadow", `hsl(176, 100%, 44%)`);
        rootNode.style.setProperty("--buttons-bg", `hsl(268, 47%, 21%)`);
        rootNode.style.setProperty("--buttons-box-shadow", `hsl(290, 70%, 36%)`);

        // Chnage Text Variable Value
        rootNode.style.setProperty("--main-text-color", `hsl(52, 100%, 62%)`);
        rootNode.style.setProperty("--main-title-color",  `hsl(52, 100%, 62%)`);
    }
}
