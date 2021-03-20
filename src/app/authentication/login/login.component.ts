import { Component } from "@angular/core";
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  loginForm: FormGroup;
  checked: boolean = true;
  isProcessing: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private message: NzMessageService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNumber: [null, [Validators.required]],
      agree: [true],
    });

    setTimeout(() => {
      this.isProcessing = false;
    }, 1500);
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid) {
      this.router.navigate(["/pages/home"]);
    } else {
      this.message.info('Please enter valid phone number!');
    }
  }

}
