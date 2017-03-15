/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
   var sum = 0;
  var fib = [0,1];

  for(var i = fib[0]; fib[fib.length -1] <= maxFibValue; i++){
    fib.push(fib[fib.length - 1] + fib[fib.length -2]);
  }

  for(var y = 0; y < fib.length - 1; y++){
     if(fib[y] % 2 === 0){
       sum += fib[y];
     }
   }
   console.log(sum);
  return sum;
}

console.log(_sumFibs(100));

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};