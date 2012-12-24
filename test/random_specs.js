"use strict";


var expect = require('expect.js'),
    random = require('../lib/random.js');


describe( 'Generate a Random' , function(){

   it('should return a random number between 0 and 9', function(){
       var expected;
       var numbersGenerated = [];
       for(var i=0;i<9;i++){
           expected = random.generate(9);

           numbersGenerated.push(expected);

           expect(expected).to.be.a('number');
           expect(expected).to.be.lessThan(9);

           //TODO: Compare if expected exists in the numbersGenerated array
       }


   });
});
