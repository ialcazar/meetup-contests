"use strict";


var expect = require('expect.js'),
    random = require('../lib/random.js');


describe( 'Generate a Random' , function(){
   var  expected,
        numbersGenerated,
        numberRepetition;
   beforeEach(function(){
       console.log("beforeEach");
       numbersGenerated = [];
       numberRepetition = 0;

   });
   it('should return a random number between 0 and 9', function(){

       for(var i=0;i<9;i++){

           expected = random.generate(9);
           console.log(expected);
           if(numbersGenerated.indexOf(expected)!==-1){
               numberRepetition++;
           }else{
               numbersGenerated.push(expected);
           }



           expect(expected).to.be.a('number');
           expect(expected).to.be.greaterThan(-1);
           expect(expected).to.be.lessThan(9);

       }

       console.log("->"+numbersGenerated);
       expect(numberRepetition).to.be.lessThan(3);


   });
});
