import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from '../app.module';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private http:HttpClient, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  login() {

    this.http.post(API_ROOT + "/auth/sign_in", {
      email: this.email,
      password: this.password
    }, {observe: "response"}).subscribe((res) => {
      console.log(res)
      const headers = res["headers"]
      console.log(headers)
      if (headers.get("uid")) {
        this.sessionService.setSession(headers.get("access-token"), headers.get("client"), headers.get("uid"))
        this.router.navigate(["dashboard"]);
      }
    })
  }

}
