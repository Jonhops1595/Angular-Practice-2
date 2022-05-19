import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
    static shouldMatchOld(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === '029164')
                    resolve (null);
                else
                    resolve({shouldMatchOld: true});
            }, 3000)
        })
    }

    static shouldMatchPasswords(control: AbstractControl) : ValidationErrors | null {
        let newPass = control.get("newPassword")?.value;
        let confirmPass = control.get("confirmPassword")?.value;
        if(newPass == confirmPass)
            return {shouldMatchPasswords : false };
        else
            return {shouldMatchPasswords : true};
    }

}