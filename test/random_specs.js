"use strict";


var expect = require('expect.js'),
    random = require('../lib/random.js');


describe( 'Random' , function(){
   var  expected,
        numbersGenerated,
        numberRepetition;
   beforeEach(function(){
       numbersGenerated = [];
       numberRepetition = 0;
       random.clean();

   });

   it('Is empty', function(){
      expect(random.isEmpty()).to.be.ok();
   });
   it('Should return a random number between 0 and 9', function(){

       for(var i=0;i<9;i++){

           expected = random.generate(9);

           if(numbersGenerated.indexOf(expected)!==-1){
               numberRepetition++;
           }else{
               numbersGenerated.push(expected);
           }



           expect(expected).to.be.a('number');
           expect(expected).to.be.greaterThan(-1);
           expect(expected).to.be.lessThan(9);

       }
       expect(numberRepetition).to.be(0);


   });
});
