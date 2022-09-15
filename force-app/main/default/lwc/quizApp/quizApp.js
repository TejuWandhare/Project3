import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selectedAns={ } //This object is used for storing answers.
    correctAns = 0 //to show the result

    
    Quetions=[
        {
            id: "Que1",
           Que:"The compact layout allows you to control the highlight panel on Salesforce classic like Salesforce lightning? " ,
           ans:{
            a:"true " ,
            b:"false" ,
            c:"Not Predicted "
           },
           correctAns: "false "
        },
        {
            id: "Que2",
           Que:"How can Salesforce Admin ensure that all Salesforce data is backed up every week?" ,
           ans:{
            a:" Import Wizard " ,
            b:"Export Wizard " ,
            c:"Weekly Data Export "
           },
           correctAns: "Weekly Data Export "
        },
        {
            id: "Que3",
           Que:"Universal Container sells both classic and lightning products to its customers. What should the Salesforce Admin use to categorize the company product?" ,
           ans:{
            a:" Product family" ,
            b:"Product Classic " ,
            c:"Not Predicted "
           },
           correctAns: "Product family "
        }
    ]
    get allNotSelected(){
        return!(Object.keys(this.selectedAns).lenght=== this.Quetions.length)
    }
    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const{name, value}= event.target
        //const name= event.target.name (instead of writting line no 41 & 42 we write line no 40.)
         //const value= event.target.value
         this.selectedAns={...this.selectedAns, [name]:value}
    }
    submitHandler(event){
     event.preventDefault(); //It will not refresh the page
    let correct= this.Quetions.filter(item=> this.selectedAns[item.id]=== item.correctAns)
    this.correctAns = correct.length
    console.log(" correct ans" +this.correctAns)
    }
    resetHandler(event){
      this.selectedAns={} //whatever the ans selected we have reset it and make it zero.
      this.correctAns=0
    }

}