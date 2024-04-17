// function groupAnagrams(strs: string[]): string[][] {
//     let indexCount: Map<number,Map<string, number>> = new Map();
var _a, _b;
//     for( let i = 0; i < strs.length; i++ ){
//         let charCodeSum = 0;
//         let charM = new Map();
//         indexCount.set(i,charM );
//         for(let j = 0; j < strs[i].length; j++ ){
//             charCodeSum += strs[i].charCodeAt(j); 
//         }
//     }
// };
var i = new Map();
i.set(0, new Map());
(_a = (i.get(0))) === null || _a === void 0 ? void 0 : _a.set(0, 1);
console.log((_b = i.get(0)) === null || _b === void 0 ? void 0 : _b.get(0));
