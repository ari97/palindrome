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
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("should return false for the empty string", function() {
      let emptyString = new Phrase("");
      assert(!emptyString.palindrome());
    });

  });

  describe("#letters", function() {
    it("should only return letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("should give empty string for no letters found", function() {
      let noLetters = new Phrase("12345");
      assert.strictEqual(noLetters.letters(), "");
    });


  });

});
