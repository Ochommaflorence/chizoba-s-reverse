function reverseFuction(sentence) {
    const wordsArray = sentence.split(" ");
    
    const reversedArray = wordsArray.reverse();
    const reverseSentence = reversedArray.join( " ")
  
    return reverseSentence;
  }
  module.exports = reverseFuction;
  
  
  