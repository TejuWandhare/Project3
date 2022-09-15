import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    userNames= ["Teju", "Abhi", "John","ray"]
     
    fetchDetailsHandler(){
        const elem = this.template.querySelector('h1') //using querySelector you can add class, styling, Add and remove attribute, render child dynamically.
        console.log(elem.innerText)

        const userElement = this.template.querySelectorAll('.names')
        Array.from(userElement).forEach(item=>{ // convert user name into an array.
        console.log(item.innerText)
       })

       //lwc:dom="manual" Demo
       const childElement = this.template.querySelector('.child')
       childElement.innerHTML='<p>I am a child.</p>'
    }
}