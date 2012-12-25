"use strict";
var numbersGenerated = [];

var _generate = function(max){
    var number;
    var exists;


    do{
        exists = false;
        number = Math.floor(Math.random()*max);
        if(numbersGenerated.indexOf(number)===-1){
            exists = true;
            numbersGenerated.push(number);
        }


    }while(numbersGenerated.indexOf(number)!==-1 && !exists);

    return number;
};

var _isEmpty = function(){
    return (numbersGenerated.length === 0?true:false);
};

var _clean = function(){
    numbersGenerated = [];
};
module.exports = {
    clean:_clean,
    isEmpty:_isEmpty,
    generate:_generate

};
