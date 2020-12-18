let assert = require("assert");
let Phrase = require("../index.js");


describe("Phrase", function() {
  //Phrase#palindrome
  describe("#palindrome", function() {

    it("should return false for a non palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });


    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });



    it("should return true for a mixed palindrome", function () {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });



    it("should return true for a palindrome with puncuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm adam.");
      assert(punctuatedPalindrome.palindrome());
    });

  });

});
