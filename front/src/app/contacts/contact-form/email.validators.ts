import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidators {

  static emailVerification: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const email = control.get('email');
    const confirmEmail = control.get('emailConfirmation');

    if (email.pristine || confirmEmail.pristine) {
      return null;
    }
    return email && confirmEmail && email.value !== confirmEmail.value ? { 'misMatch': true } : null;
  }

}
