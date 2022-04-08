import {Player} from './classes/Players.js';
import { isPlayer } from './interfaces/isPlayer.js';
const country = "bangladesh";
console.log(country)
const add =(num1:number,num2:number):number=>{
    return num1+num2
}

console.log(add(2,5));
let playerName ='Ashraful'
let age = 35
console.log(playerName);
console.log(age)
// function 

function multiply (a:number,b:number){
    return a * b;
}
console.log(multiply(4,5));

// array

let fruits =['apple','banana','orange']

fruits.push("mango")

console.log(fruits);

let mixed = ["apple",34,true]

mixed.push(false)
console.log(mixed);



// object

let person={
    name:'Ashfakul',
    age:35,
    location:true
}
person.age = 45;

console.log(person)


const arr1:string[]=[]

arr1.push('apple')
arr1.push('banana')
arr1.push('35')
arr1.push('true')
console.log(arr1)

// Array is certain type of object
let c: object;

c=[1,2,3];
 
let a:string;
let b: number;

// array

let d:(string | number | boolean)[]=[]

d.push('Ashfakul')
d.push(true,4,'Rahi')
console.log(d)


// Dynamic type
// let e: any;


// e=5;
// e='Ashfakul';

let e: any[]=[];

e.push("bangladesh")

// object
let f:{
    name:any,
    age:any
}
        f={
            name:'bangladesh',
            age:true

        }
console.log(f)

// function

let myFunction:Function;

myFunction=()=>{
    console.log('hello world')
}

// here c is optional perameter  
const myFunc =(a:string,b:string,c:string ='true')=>{
    // console.log(c)
    // console.log(`Hello ${a}${b}`)

    // return type string
    return a+b
}

myFunc('A','B','false');
// Type Aliases
type stringOrNum = string |number;
type userType ={name:string,age:number};
const userDetails =(id:stringOrNum,
        user:userType
    )=>{
        console.log(`User id is ${id},name is ${user.name} and age is ${user.age}`);
        
    };
 const sayHello =(user:userType)=>{
     console.log(`Hello ${user.age >50 ? "Sir": "Mr"}${user.name}`);
     
 }   
//  function signature

let calculation:(x:number,y:number,z:string) =>number;  

calculation=(a:number,b:number,c:string)=>{
    if(c==='add'){
        return a+b;
    }
    else{
        return a-b
    }    
        
}
console.log(calculation(5,6,'minus'))


// TypeScript Class
//  class  Player {

//     name:string;
//     age:number;
//     country:string;
//      constructor(n:string,a:number,c:string) {
//          this.name=n;
//          this.age=a;
//          this.country=c;
//      }
     
     
//      play(){
//          console.log(`${this.name} from ${this.country} is playing`)
//      }
//  }

//  const mashrafi = new Player('Mashrafi',40,'Bangladesh')
//  const sakib = new Player('Sakib Ali',39,'Bangladesh')
// console.log(sakib.name)
//  const players: Player[]=[]

//  players.push(sakib,mashrafi)


//  console.log(players);
// Access Modifiers


 const mashrafi = new Player('Mashrafi',40,'Bangladesh')

let sakib:isPlayer
sakib = new Player('Sakib Ali',39,'Bangladesh')

//  sakib.name="Mashrafi";
//  sakib.age =40;
// console.log(sakib.name)
// console.log(sakib.age)
 const players: isPlayer[]=[]

 players.push(sakib,mashrafi)


 console.log(players);

//  system module




// Interface object

interface RectangleOptions{
    width : number;
    length:number;
}
function drawRectangle(options:RectangleOptions){
    let width =options.width;
    let length = options.length
}    

// drawRectangle({
//    width:30,
//    length:20
// })

let threeDoptions={
    width:30,
    length:20,
    height:10
 }
drawRectangle(threeDoptions)

// Generics

const addID = <T extends {
    name:string,
    age:number,
    country:string
}>(obj:T)=>{
    let id =Math.floor(Math.random()*100);
    return{...obj,id};
};

let user =addID({
    name :'Mashrafi',
    age :40,
    country:'bangladesh'
})


// let user='Mashrafi'
console.log(user);


//  Generics in Interface

interface APIResponse <T>{
    status:number;
    type:string;
    data:object;
}
const response1: APIResponse<object> ={
    status:200,
    type: 'Ok',
    data:{
        name:'Test',
        something: 300
    }
}


console.log(response1)