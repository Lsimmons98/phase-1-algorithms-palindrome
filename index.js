function isPalindrome(word) {
  const forwardArrayJSON = JSON.stringify(word.split(''))
  const backwardArrayJSON = JSON.stringify(word.split('').reverse())
  if (forwardArrayJSON === backwardArrayJSON){
    return true
  }else{
    return false
  }
}

// split string into an array of individual letters (forwardArray)
// reverse the contents of the array and save to a new array (backwardArray)
// Use JSON.stringify() on each in order to be able to compare the two 
// if forwardArray === backwardArray
// return true
// else return false 



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
