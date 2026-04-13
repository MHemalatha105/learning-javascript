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

const myFun = function(a,b){
    return a+b
}

console.log(myFun(5,5));


