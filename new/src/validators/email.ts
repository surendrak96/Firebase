import { FormControl } from '@angular/forms';

export class emailValidator {

    static checkEmail(control: FormControl): any {

        return new Promise(resolve => {
// Simulates a time-consuming server response
            
            setTimeout(() => {
                if (control.value.toLowerCase() === "imsurendra99@gmail.com") {
                    
// if the username is equal
                    resolve({
                        "username taken": true
                    });

                } else {
                    resolve(null);
                }
            }, 1000);

        });
    }

}