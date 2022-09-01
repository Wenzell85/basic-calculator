
const button = document.querySelectorAll('.butt'); //each button clicked 
const display = document.querySelector('.display'); //Display 
const equalButt = document.querySelector('#equal'); //equal button
const worldButt = document.querySelector('#logo'); //Logo button
let expression = '';



button.forEach((item) => {
    item.addEventListener('click', buttonClick);

});

worldButt.addEventListener('click', function(){
    display.innerHTML = 'Developed By: Mawande M<br>Date: 15.08.2022 <br>At: East London, SA';
    display.classList.add('wb');
})



//*************************************function library**************************************************/


//button  click function 

function buttonClick(e) {

    display.classList.remove('wb');
    expression += this.innerText;    
    if (expression.length > 12) {

        let maxDigits = expression.slice(0, 12);

        display.innerText = maxDigits;
        
        
    }else{

        display.innerText = expression;
    } 

    if(expression.charAt(0)=='0' && expression.length > 1){
        let zeroPrefix = expression.slice(1, 13);
        display.innerText = zeroPrefix;

    }

    if(expression.charAt(1)== '.'){

        let comm = expression.slice(0, 12);
        display.innerText = comm;
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


function operate () {

    let answer = eval(expression);
    let answer2 = answer.toString().slice(0, 12);    

    display.innerText = answer2;     

    expression = answer;

    
}



//****************************************************************************************************




