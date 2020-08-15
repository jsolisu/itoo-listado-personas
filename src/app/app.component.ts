import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDP8huv37LpOKnQvTgyRRPtPhhv5oYOm6s',
      authDomain: 'listado-personas-1ee1c.firebaseapp.com'
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}
