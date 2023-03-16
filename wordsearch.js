// Pair programmed by Lily Go @lilygo92 and Rain Zhu @raincouver
const transpose = function(matrix) {
  // create an empty array
  const result = [];

  // loop matrix[i].length number of times
  for (let i = 0; i < matrix[0].length; i++) {
    // create an empty array for each loop
    let arr = [];
    
    // loop through the numbers inside the nested arrays
    for (const element of matrix) {
      // transpose the numbers that correspond to variable num
      arr.push(element[i]);
    }

    // push arr to final results array
    result.push(arr);
  }

  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
    
  const horizontalReverse = letters.map(ls => ls.reverse().join(''));
  for (let l of horizontalReverse) {
    if (l.includes(word)) return true;
  }

  const verticalReverse = transpose(letters).map(ls => ls.reverse().join(''));
  for (let l of verticalReverse) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;