import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe(
      (resultado: Persona[]) => {
        this.personas = resultado;
        this.personasService.setPersonas(resultado);
      }
    );
  }

  agregar(): void {
    this.router.navigate(['personas/agregar']);
  }
}
