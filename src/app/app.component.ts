import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDP8huv37LpOKnQvTgyRRPtPhhv5oYOm6s',
      authDomain: 'listado-personas-1ee1c.firebaseapp.com'
    });
  }
}
