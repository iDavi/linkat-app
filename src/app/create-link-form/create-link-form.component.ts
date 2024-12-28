import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgxCaptchaModule],
  templateUrl: './create-link-form.component.html',
  styleUrls: ['./create-link-form.component.css'],
})
export class CreateLinkFormComponent{
  createLinkEndpoint = '/links';
  errorMessage = ""
  captchaSiteKey = environment.captchaSiteKey
  linkCreationControl = new FormGroup({
    url: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    recaptcha: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient, private router: Router, private route : ActivatedRoute) { 
    this.errorMessage = this.route.snapshot.queryParamMap.get("errorMessage") || ""
  }
  async displayError(errorMsg : string){
    await this.router.navigate([""], {queryParams: {errorMessage: errorMsg}})
    window.location.reload()
  }
  onSubmit() {
    if (this.linkCreationControl.valid) {

      this.http
        .post<any>(
          `${environment.apiUrl}${this.createLinkEndpoint}`,
          this.linkCreationControl.value,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (response: any) => {
            this.router.navigate(["/link-ready"], { queryParams: { nickname: this.linkCreationControl.value.nickname } })
          },
          error: (error: any) => {
            try{
              let errorCause = Object.keys(error["error"]["errors"])[0]
              this.displayError(`An error occurred: ${errorCause} - ${error["error"]["errors"][errorCause]}`)
            }catch(_){
              this.displayError(`An error occurred: ${JSON.stringify(error["error"])}`)
            }

          },
        });
    } else {
      this.displayError(`Invalid form!`);
    }
  }
}