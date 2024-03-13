// solve gcdofstrings problem from leet  code 
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Given two strings str1 and str2 of the same length, determine whether you can get str1 by
//  concatenating str2 some number of times to itself.
// code :
function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1)
        return '';
    var gcd = function (a, b) { return (b === 0 ? a : gcd(b, a % b)); };
    return str1.substring(0, gcd(str1.length, str2.length));
}
console.log(gcdOfStrings('ABCABC', 'ABC')); // ABC
console.log('hi');
