// let arr = [];

// let str = 'hello there '

// for (let i = 0; i < str.length; i++) {
//     var repeated = false;
//         for (let j = 0; j < str.length; j++) {
//                 if(str[j] === str[i] && j !== i){
//                    repeated = true;
//                    break;
//                 }

//         }
//         if(!repeated) arr.push(str[i]);
// }


// console.log(arr);


// function divide(str,parts) {
//    let partSize = 0;
//    if(str.length % parts === 0){
//       partSize = str.length / parts;
//    }else {
//            console.log(`string is not divisable in ${parts} parts`);
//            return;
//    }

//    let arr = [];
//    let temp = '';
//    let count = 0;
//    for (let i = 0; i < str.length; i++) {
//        count++;
//         if(count === partSize){
//                 temp = temp+str[i];
//                 arr.push(temp);
//                 temp = '';
//                 count = 0;

//         }else {
//                 temp = temp+str[i];
//         }
//    }

//  console.log(arr);

// }


// divide("hello",6)


// function swap(str) {
//         let arr = [];
//         for (let i = 0; i < str.length; i=i+2) {
//              if( i <= str.length-2)arr.push(str[i+1],str[i]); 
//              else {
//                      arr.push(str[i]);
//                      break;
//              } 

//         }

//         console.log(arr.join(''));
// }

// swap('abcde')

// swap


// function getStr(length) {
//     //32 to 126
//     let str = [];
//     for (let i = 1; i <= length; i++) {
//             str.push(String.fromCharCode(Math.floor(1+Math.random() * 126)));

//     }
//     console.log(str.join(''));

// }

// getStr(5);


// function split(seperater) {
//     if(seperater === undefined) return [this.toString()];
//     else if(seperater === ''){ return [...this]; }
//     let result = [];
//     let temp = '';
//       for (let i = 0; i < this.length; i++) {
//               if(this[i] === seperater){
//                     result.push(temp);
//                     temp = '';
//               }else if(i === this.length-1){
//                 temp+=this[i];
//                 result.push(temp);
//               }else {
//                       temp+=this[i];
//               }
//       }
//       return result;
// }

// str = 'akshay parte';

// console.log(split.call(str,' '));


// function startsWith(sub) {
//      let yes = true;   
//       for (let i = 0; i < sub.length; i++) {
//            if(this[i] !== sub[i])
//                yes = false;
//       }
//       return yes;  
// }

// str = 'akshay parte';

// console.log(str.startsWith('kshay parte'));
// console.log(startsWith.call(str,'kshay parte'));

// function includes(sub) {
//         let started = false;
//         for (let i = 0; i < this.length; i++) {
//             if(started){

//             }else {
//                 if(this[i] === sub[0])    
//             }

//         }

// }

// C:\Users\aksha\OneDrive\Desktop\node interview\test.js



// function test() {

//     for (var i = 0; i < 5; i++) {

//         setTimeout((i) => {
//             console.log(i);
//         },1000,i);

//     }
// }

// function test() {
//     for (var i = 0; i < 5; i++) {
//          (function(k) {

//             setTimeout(() => {
//                 console.log(k);
//             },1000);  

//          })(i);
//     }
// }


// function test() {
//     for (let i = 0; i < 5; i++) {

//             setTimeout(() => {
//                 console.log(i);
//             },1000);  

//     }
// }

// function test() {

//     {
//         // both for loops have different outputs
//         // this one will give out out as intended
//         for (let i = 0; i < 5; i++) {

//             setTimeout(() => {
//                 console.log(i);
//             },1000);  

//         }
//     }

//     {  
//         // this one will fail
//         let i;
//         for (i = 0; i < 5; i++) {

//             setTimeout(() => {
//                 console.log(i);
//             },1000);  

//         }
//     }

// }

// in browser whenever we define variables globaly they belong to window object
// in node it does not happen
// var name = 'akshay';
// let myname = 'parte';
// this.hhh = 'ddd'

// let obj = {
//     hhh:123,
//    fun:() => {
//         console.log(this.hhh);
//     }    
// }

// obj.fun();
// fun();
// test();

// function fun(p) {
//     if(p){

//     }
// }


// fun(1)(2)(3)


// function game() {
//     this.player1 = 'akshay';
// }

// function hhh() {
//     game.call(this)
//     this.player2 = 'vinit';
// }

// let obj = new hhh();

// console.log(obj);
// hhh.prototype.__proto__ = game.prototype;


// console.log(Array.from(1));


// let obj = {
//     valueOf(){
//         return 'obj'
//     }
// }


// let obj1 = {
//     valueOf(){
//         return 'obj'
//     }
// }


// console.log(obj == 'obj');



//   function execute1() {
//       console.log('fun1');
//       process.nextTick(() => {
//           console.log('tick from fun1');
//       })
//   }


//   function execute2() {
//       console.log('fun2');
//       process.nextTick(() => {
//         console.log('tick from fun2');
//     })
//   }

//   execute1();
//   execute2();


// setTimeout(() => {
//    console.log('settimeotu 1');
//    setTimeout(() => {
//        console.log('nexttick from settimeout1');
//    })
// },1000)


// setTimeout(() => {
//     console.log('settimeotu 2');
//     // process.nextTick(() => {
//     //     console.log('nexttick from settimeout2');
//     // })  
// },1000)

// setTimeout(() => {
//     console.log('settimeotu 3'); 
//     // process.nextTick(() => {
//     //     console.log('nexttick from settimeout3');
//     // })
// },1000)


// let fs = require('fs');


// fs.open('game.txt','w',(err,fd) => {
//     let b = Buffer.from('akshy parte\n');


//     setInterval(() => {
//       fs.write(fd,b,0,5,null,(err,by,buff) => {
//         console.log(by);
//        });
//     }, 2000);



// })

// let {Readable} = require('stream');


// let readStream = new Readable();



// function minPalindromeSteps(str) {

// let reversed = str.split('').reverse();
// let map = new Map();
// let min = Number.MAX_VALUE;
//  while(reversed.length){
//     let temp = str+reversed.join("");
//     let length = Math.floor(temp.length/2);
//     let bc = temp.length-1;
//     let isPalindrome = true;
//     for(let i = 0;i < length;i++){
//         if(temp[i] !== temp[bc]){
//            isPalindrome = false;
//            break;
//         } 
//         bc--;
//     }
//     if(isPalindrome){
//       if(reversed.length < min) min = reversed.length;
//       map.set(reversed.length,temp);
//     }
//     reversed.shift();
//  }

//  return min;

// }

//=========================================================

// function isVowel(char) {
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     return true;
//   } else return false;
// }

// function distanceToNearestVowel(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (isVowel(str[i])) {
//       arr.push(0);
//       continue;
//     } else {
//       let pos = i;
//       let up = i + 1;
//       let down = i - 1;

//       let upperFoundVovelIndex = null;
//       let lowerFoundVovelIndex = null;

//       while(up < str.length){
//            if(str[up]){
//               upperFoundVovelIndex = up;
//               break;
//            }
//            up++;
//       }

//       while(down >= 0){
//         if(str[down]){
//           lowerFoundVovelIndex = down;
//           break;
//         }
//         down--;
//       }

//       if(upperFoundVovelIndex && lowerFoundVovelIndex){
//         if(upperFoundVovelIndex - i < i-down) arr.push(upperFoundVovelIndex-i)
//         else arr.push(i-down); 
//       }else if(upperFoundVovelIndex){
//              arr.push(up-i);
//       }else {
//             arr.push(i-down)
//       }
//     }
//   }

//   console.log(arr);
// }

// distanceToNearestVowel('babbb');


// function longestNonrepeatingSubstring(str) {
  
//   let subStrings = [];
//   let nonRepeated = [];


//    let subStringStart = 0;
//    for(let i = 0;i < str.length;i++){
//          if(!nonRepeated.includes(str.charAt(i))){
//             nonRepeated.push(str.charAt(i));
//          }else {
//               subStrings.push(nonRepeated.join(''));

//            let repeatedCharIndex = nonRepeated.indexOf(str.charAt(i));
//            console.log(nonRepeated);
//            nonRepeated.splice(0,repeatedCharIndex);
//          }   
//    }
//    if(subStrings.length === 0) subStrings.push(nonRepeated.join(''));
   

//     console.log(subStrings);
//    let tempMax = 0;
//    let longestSubstring;

//        for (const str of subStrings) {
//           if(str.length > tempMax){
//             longestSubstring = str;
//             tempMax = str.length;
//           } 
//        }
  
//    return longestSubstring;
// }

// console.log(longestNonrepeatingSubstring('abddefgh'));

