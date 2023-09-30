const button = document.querySelector('button');
button.addEventListener("click", updateNums);

//updates the numbers in their own variables 
//calls the functions that switch images
//displays total num
function updateNums(){
    const num1 = Math.floor(Math.random()*6 +1);
    const num2 = Math.floor(Math.random()*6 +1);
    switchImg1(num1);
    switchImg2(num2);
    const totalNum = document.querySelector("p");
    const numericalVal = num1+num2;
    totalNum.textContent = "Total: " + numericalVal;
}

//switches the images using element id
function switchImg1(num1){
    var pic = document.getElementById(1);
    if (num1 ==1){
        pic.src = "1side.png";
    }
    if (num1 ==2){
        pic.src = "2side.png";
    }
    if (num1 ==3){
        pic.src = "3side.png";
    }
    if (num1 ==4){
        pic.src = "4side.png";
    }
    if (num1 ==5){
        pic.src = "5side.png";
    }
    if (num1 ==6){
        pic.src = "6side.png";
    }
}

//does the same thing
function switchImg2(num2){
    var pic = document.getElementById(2);
    if (num2 ==1){
        pic.src = "1side.png";
    }
    if (num2 ==2){
        pic.src = "2side.png";
    }
    if (num2 ==3){
        pic.src = "3side.png";
    }
    if (num2 ==4){
        pic.src = "4side.png";
    }
    if (num2 ==5){
        pic.src = "5side.png";
    }
    if (num2 ==6){
        pic.src = "6side.png";
    }
}