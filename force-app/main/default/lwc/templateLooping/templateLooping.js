import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

    carList= ["Maruti", "Tata","Hyudai","Ford","Audi"]; //array List

    ceoList= [
        {
            id: 1,
            Comapny: " Google",
            Name : " Sundar Pichai"
        },
        {
            id: 2,
            Comapny: " Amazon",
            Name : " Jeff Bezos"
        },
        {
            id: 3,
            Comapny: " Tesla",
            Name : " Elon Musk"
        },

    ]
}