import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
//Constructor method is invoked when the component instance is created.
//you have to call super() first
isChildVisible=false;
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
constructor(){
    super()
    console.log("Parent Constructor Called.")
}

connectedCallback(){
//This method is used to fetch the data from server on page. used to fetch the data from salesforce.
console.log("Parent connectedCallback Called.")
}
renderedCallback(){
console.log("Parent renderedCallback Called.")//if you change anything on html or input page then rendered callback is called again & again. 
}
name
changeHandler(event){
    this.name= event.target.value
}
handleClick(){
    this.isChildVisible = !this.isChildVisible
}
errorCallback(error, stack){
 console.log(error.message)
 console.log(stack) //Test Comment
}
}
