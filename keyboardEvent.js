
const keyPressEvent = () => {
    const rootNode= document.querySelector(':root'); //Get Root Element(html)
    rootNode.addEventListener("keydown", exampleFunc);
}

const exampleFunc = (event) => {
    const key = event.key; // event.key
    const validKeyArray = ['1','2','3','4','5','6','7','8','9','0','.','+','-',"*","/","Backspace","=","Escape"];
    validKeyArray.forEach(element => {
        if(key === element ){
            document.getElementById(key).click();
        }
    });

    // Enter Key Mapping To = Button
    if(key === "Enter"){
        document.getElementById("=").click();
    }
    
}
keyPressEvent();
