/*

    Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.

*/

function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var currIndex = 0;

    return function() {
        if (currIndex > (list.length-1)) {
            currIndex = 0;
        }
        return list[currIndex++];
    }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6