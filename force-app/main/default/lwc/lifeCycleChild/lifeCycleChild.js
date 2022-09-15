import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("Child Constructor Called.")
    }
    
    connectedCallback(){
    //This method is used to fetch the data from server on page. used to fetch the data from salesforce.
    console.log("Child connectedCallback Called.")
    throw new error("Loading of child component failed");
    }
    renderedCallback(){
    console.log("Child renderedCallback Called.")   
    }

    disconnectedCallback(){
        alert("Child disconnectedCallback is called.")
    }
}