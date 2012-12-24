"use strict";


var expect = require('expect.js'),
    random = require('../lib/random.js');


describe( 'Generate a Random' , function(){

   it('should return a random number between 0 and 9', function(){
       expect(random.generate(9)).to.be.a('number');

   })
})
