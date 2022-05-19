import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
})
export class PasswordFormComponent{
  form = new FormGroup({
    oldPassword: new FormControl(undefined,undefined,PasswordValidators.shouldMatchOld),
    newPasswordGroup : new FormGroup({
      newPassword: new FormControl(),
      confirmPassword: new FormControl()
    },
    PasswordValidators.shouldMatchPasswords)
  },
  Validators.required);

  get oldPassword() {
    return this.form.controls['oldPassword'];
  }

  get newPasswordGroup() {
    return this.form.controls['newPasswordGroup'];
  }

  get newPassword() {
    return this.form.controls['newPasswordGroup'].get('newPassword');
  }

  get confirmPassword() {
    return this.form.controls['newPasswordGroup'].get('confirmPassword');
  }


}
