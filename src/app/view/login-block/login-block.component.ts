import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
})
export class LoginBlockComponent implements OnInit {

  serverError = ''

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(value: {login: string, password: string}) {
    console.log('OnLogin', value)
  }

}
