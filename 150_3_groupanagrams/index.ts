// function groupAnagrams(strs: string[]): string[][] {
//     let indexCount: Map<number,Map<string, number>> = new Map();

//     for( let i = 0; i < strs.length; i++ ){
//         let charCodeSum = 0;
//         let charM = new Map();
//         indexCount.set(i,charM );
//         for(let j = 0; j < strs[i].length; j++ ){
//             charCodeSum += strs[i].charCodeAt(j); 
        
//         }
//     }


// };

let i: Map<number, Map<number, number>>  = new Map();


i.set(0, new Map());

(i.get(0))?.set(0, 1);

console.log(i.get(0)?.get(0));




