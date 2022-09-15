import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signiupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedBtn =''

    //render is used when there are more than one html form & we have only one js file.
 render(){
    return this.selectedBtn === 'SignUp' ? signiupTemplate :
    this.selectedBtn === 'SignIn' ? signinTemplate :
    renderTemplate
 }

 handleClick(event){
    this.selectedBtn= event.target.label
 }
 submitHandler(){
    console.log(`${event.target.label}successfully!!`)
 }
}