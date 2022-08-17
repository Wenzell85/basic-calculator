
const button = document.querySelectorAll('.butt'); //each button clicked 
const display = document.querySelector('.display'); //Display 
const equalButt = document.querySelector('#equal'); //equal button
let expression = '';



button.forEach((item) => {
    item.addEventListener('click', buttonClick);

});



//*************************************function library**************************************************/


//button  click function 

function buttonClick(e) {
    expression += this.innerText;    
    if (expression.length > 12) {

        let maxDigits = expression.slice(0, 12);

        display.innerText = maxDigits;
        
    }else{

        display.innerText = expression;
    } 
    
    
    if(this.innerText == 'C'){
    
        display.innerText = '0';
        expression = '';

    }

    if(expression.slice(0, 2) == '00'){

        display.innerText = '0';
        expression = '';
    }

    

};

//Equal button click

equalButt.addEventListener('click', operate);



// Basic calculator functions

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};


const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};


//Operator function       


function operate (e) {

    let answer = eval(expression);

    display.innerText = answer;     

    expression = answer;

}



//****************************************************************************************************




