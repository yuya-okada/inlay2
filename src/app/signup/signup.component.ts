import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from '../app.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  signup() {
    this.http.post(API_ROOT + "/user", {
      email: this.email,
      password: this.password
    }).subscribe((data) => {
      console.log(data)
    })
  }

}
