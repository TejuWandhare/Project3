import { LightningElement, api} from 'lwc';

export default class P2cAlertComponent extends LightningElement {

    @api message // message is a property. to make it public property we use api decorator.
    @api cardHeading
    @api number
    @api isValid
    //ihuyhunijnjknijhbuhgu
}