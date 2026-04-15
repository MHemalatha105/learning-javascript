console.log(-1);
// var a = 10;
// var a = 60;
// console.log(a); 

// let c = 50;
// c=87;
// confirm.log(c);

// const b = 32;
// console.log(b);

// for(let index =0;index<=5;index++)
// {
//     console.log(index);
// }

//another way.....
// let num1 =10;
// let num2="10";
// if(num1==num2){
// console.log(-1);
// }
// else{
// console.log(1);
// }


for(let i=1;i<5;i++)
{
    for(let j=1;j<i;j++)
    {
        console.log("*");
    }
    console.log("*");
}


// Arrays

// let a =[100,"Hemaa",34.6,null,true]
// for(let i = 0;i<a.length;i++)
// {
//     console.log(typeof a[i]);
// }

// let a= ["Sairam",3,45,50];
//  for(let i = 0;i<a.length;i++)
//  {
//      console.log(typeof a[i]);
//  }

//====predefined methods
// let userData  = ["Apple",10,49.34,true,"Hello"];
// console.log(userData);

// userData.push(100);
// console.log(userData);

// userData.pop();
// console.log(userData);

// userData.shift();
// // console.log(userData);

// userData.unshift();
// console.log(userData);

const obj = {
    id:1,
    name:"Guest"
}
console.log(obj.loc);

obj.loc = "Hyd"
console.log(obj);

const users = [
    {
         id:1,
         name:"user1",
         loc:"Hyd"
    },
    {
        id:2,
        name:"user2",
        loc:"Hyd"
    },
]
console.log(users[0].name);

//for of -arrays
//for in - objects


//Functions.....
// function myFun(){
//     console.log(-1);
//     return -1
// }
// console.log(myFun);
// console.log(myFun());

// function add(a,b){
//     return a+b;
// }
// console.log(add(4,6));

// function add(a,b){
//     return a-b;
// }
// console.log(add(4,2));

// const myFun = function(a,b){
//     return a+b
// }

// console.log(myFun(5,5));

// function add(a,b,operation){
//     return a+b++;
// }
// console.log(add("The addition of"  + 4,6,));

// let name = "Hemaa";
// let age = "22";

// console.log("My.......name is " + name + ". she is "+ age);
// console.log(`My.....name is ${name}.she is ${age}`) ;


//DOCUMENT OBJECT MODEL////
// let e=document.getElementById("id1");
// console.log(e);
// console.log(e.innerText);
// console.log(e.innerHTML);
// e.innerText = "Helloooooo";   

// //when u want to add html tags inside then we have to use innerHtml like if we want to make text bold then
// //we have to write e.innerHTML="<b>Hellooo</b>"
// //e.innerHTML="<i>Helloooooo</i>"

// let f=document.getElementsByClassName("uni");
// console.log(f.innerText);
// console.log(f.innerHTML);

// let box = document.getElementsByClassName("unique");
// box[0].innerHTML="Manvikk";
//f[1].innerHTML = "Sairammm";     //index.js:149 Uncaught TypeError: Cannot set properties of undefined (setting 'innerHTML')

// const myFun=() =>
// {
//     let d = document.getElementById("suchi");
//     d.innerHTML=d.innerHTML=="Hellooooo"?"Byeeee":"Hellooooo";
//     d.style.color=d.style.color=="blue"?"red":"blue";
// };

const myFun=() =>
{
    let d=document.getElementById("hema");
    let l="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";
    d.src==l?d.src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80":d.src=l;
}