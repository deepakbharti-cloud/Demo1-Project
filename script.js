// function dance(){
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
// }
// dance();
// let hay=function(){
//     console.log("hello");
// }
// hay();



//parameter and argument
// function dance(v1){ //esme v1 ek parameter hai kuiki function men hai
//     console.log(`${v1}  daud raha hai`);
// }

// dance("adarsh"); esme adarsh ek argument hai
// dance("depak");
// dance("sanjana");
// dance("mannu");

// function lolo(a,b){
// console.log(a+b);
// }
// lolo(1,2);
//jaha se aye ho wahi dhus dungi aisa dadi ne kaha th
// it is called return
// function add(){
//     return 12;
// }








// let d= add();
// console.log(d);
//first order function 
// function abcde(val){
// val();
// }
// abcde(function(){
//     console.log("hay");
// });
//higest order function
// function abcd(val1){
//     return function(){
//         console.log("hay1");
//     }
// }
// abcd()()
//pur function
// let a=15;
// function abcd1(){
// console.log("heeyyyeyey");
// }
// abcd()
//impure function
// function abcd(){
// console.log(a++)
// }
// abcd()
//arrow function 
// let multiply=(a,b)=>{
// return a*b;
// };
// multiply(2,3);
//Use rest parametr to accept any number of scores andreturn th etoral
// function score(...score1){
// let total=0;
// score1.forEach(function(val){
//     total=total+val;
// });
// return total ;
// };
// console.log(score(1,2,3,4,5,6,7));
//BMI calculator
function bmi(weight,height){
return weight /(height*height);
}
 let d=bmi(63,1.7);
 console.log(d);