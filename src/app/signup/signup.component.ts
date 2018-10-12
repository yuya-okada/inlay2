import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from '../app.module';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;

  constructor(private http:HttpClient, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.http.post(API_ROOT + "/user", {
      email: this.email,
      password: this.password
    }).subscribe((data) => {
      console.log(data)

      this.http.post(API_ROOT + "/auth/sign_in", {
        email: this.email,
        password: this.password
      }, {observe: "response"}).subscribe((res) => {
        console.log(res)
        const headers = res["headers"]
        if (headers.get("uid")) {
          this.sessionService.setSession(headers)
          this.router.navigate(["dashboard"]);
        }
      })
    })
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }

}
