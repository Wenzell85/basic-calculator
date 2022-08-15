// Basic calculator functions 


const add = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
}


const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}


//Operator function 

const operate = function(operator, a, b){

    return operator(a, b);
}




//sconsole.log(divide(4, 2)); 