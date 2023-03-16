const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'K', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'I', 'L', 'R', 'D'],
      ['Y', 'F', 'C', 'F', 'T', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'T', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'S', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'KITTENS');

    assert.isTrue(result);
  });

  it("should return false if the words array is empty", function() {
    const result = wordSearch([], 'MEOW');

    assert.isFalse(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'K', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'A', 'L', 'R', 'D'],
      ['Y', 'F', 'C', 'F', 'D', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'F', 'V', 'R', 'G'],
      ['W', 'H', 'Y', 'P', 'P', 'U', 'P', 'L'],
      ['B', 'F', 'R', 'E', 'G', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'S', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PUPPY');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards and vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'K', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'A', 'L', 'R', 'D'],
      ['Y', 'F', 'C', 'F', 'D', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'F', 'V', 'R', 'G'],
      ['W', 'H', 'Y', 'P', 'T', 'V', 'P', 'L'],
      ['B', 'F', 'R', 'E', 'F', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'O', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'W', 'U', 'A', 'L'],
    ], 'WOOF');

    assert.isTrue(result);
  });

  // it("should return true if the word is present diagonally", function() {
  //   const result = wordSearch([
  //     ['K', 'W', 'C', 'F', 'K', 'U', 'A', 'L'],
  //     ['S', 'I', 'I', 'A', 'A', 'L', 'R', 'D'],
  //     ['Y', 'F', 'T', 'F', 'D', 'U', 'A', 'L'],
  //     ['H', 'M', 'J', 'S', 'F', 'V', 'R', 'G'],
  //     ['W', 'H', 'Y', 'P', 'U', 'V', 'P', 'L'],
  //     ['B', 'F', 'R', 'E', 'F', 'N', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'O', 'P', 'E', 'I'],
  //     ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'W', 'U', 'A', 'L'],
  //   ], 'KITSUNE');

  //   assert.isTrue(result);
  // });

  // it("should return true if the word is present backwards diagonally", function() {
  //   const result = wordSearch([
  //     ['K', 'W', 'C', 'F', 'K', 'U', 'A', 'L'],
  //     ['S', 'Y', 'I', 'A', 'A', 'L', 'R', 'D'],
  //     ['Y', 'F', 'R', 'F', 'D', 'U', 'A', 'L'],
  //     ['H', 'M', 'J', 'R', 'F', 'V', 'R', 'G'],
  //     ['W', 'H', 'Y', 'P', 'A', 'V', 'P', 'L'],
  //     ['B', 'F', 'R', 'E', 'F', 'T', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'O', 'P', 'S', 'I'],
  //     ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'W', 'U', 'A', 'L'],
  //   ], 'STARRY');

  //   assert.isTrue(result);
  // });
});
