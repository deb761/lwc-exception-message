import { LightningElement } from 'lwc';
import passError from "@salesforce/apex/DataController.passError";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowError extends LightningElement {
    connectedCallback() {
        passError({ message: 'my very own error' })
        .then((data) => {
            console.log(data);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'No errors',
                    variant: 'success'
                })
            );

        })
        .catch((error) => {
            console.error(error);
            var message = 'message was not passed in exception!';
            if (error && error.body && error.body.message) {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error from Apex',
                    message: message,
                    variant: 'error'
                })
            );

        });
    }
}