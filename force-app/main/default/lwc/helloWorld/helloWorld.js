import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   fullName= "Tejaswini"

   
   title="Lightning Web Component"  //Two way binding

   changeHandler (event) {       //events gets feedback from html to js
    this.title = event.target.value
   }
   //@track is used to observe the changes to the properties of an object.
    @track  obj= {
      name:"Teju",  //passing data from js to html.
      city: "Pune",
      postalcode: 23456
  
     }
   trackHandler (event){
      this.obj.city = event.target.value
   }

   //Mutating a data by using @track is not a good practice. so we will create spread operator to create a new copy of that object.
   //@track is used to update the values.
   obj= {
      name:"Teju",  //passing data from js to html.
      city: "Pune",
      postalcode: 23456
  
     }
   trackHandler (event){
      this.obj ={...this.obj, "city": event.target.value}
   }

   //Getter is always return something. Getter is used to show the updated data on the screen.
   //Getter method change the values dynamically in html.
   users= ["Jihan", "Smith", "Nik"]
   num1= 20
   num2= 10

   get firstUser(){
     return this.users[0]
   }

   get Multiply(){
      return this.num1 * this.num2
   }

   //Directive always used with a template tag.
   isVisible = false
   handleClick(){
      this.isVisible = true //whenever we click on button this exp should true.
   }

   //falsy values
  // x= 0, null, false, undefined, " "
}


