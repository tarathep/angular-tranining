import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CommonValidator {
    static password(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value.length <3){
            return {length: 'minimum length is 3'}
        }
        return null;
    }
}
