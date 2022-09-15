

var Name="Teju"
console.log(Name)

var arr10 = ["x", "y", "z"]
arr10.push(20)
console.log(arr10)


var age= 25
var str = "My name is  "  +Name + "  and my age is  "  +age;
console.log(str)

let obj={ Name: "Abhi",
          age : 25,
          DOB : "10/8/1995"

}
//Object.keys()
console.log( Object.keys(obj) )

//Object.values()
console.log( Object.values(obj) )

//JSON.stringify
let string= JSON.stringify(obj);
console.log(string)

//JSON.parse
console.log(JSON.parse(string))

//Query Selector
let element= document.querySelector('div')
element.style.color="red"
console.log(element) 

//querySelectorAll
let elementAll= document.querySelectorAll('div')
console.log(elementAll)

//event
function firstFunction(){
    console.log("Hurrey")
}
let btn= document.querySelector("button")
btn.addEventListener("click", firstFunction)

//setTimeout :- sets a timer and executes a callback function after a timer expires. Its a method of window object.
let timerId= window.setTimeout(function(){
    console.log("Hello")
},2000)
console.log(timerId)
clearTimeout(timerId)

//setInterval :- repeatedly calls a function with a fixed delay between each call. Its a method of window object
 let intervalId= window.setInterval(function(){
    console.log("Hello")
},1000)
clearInterval(intervalId)