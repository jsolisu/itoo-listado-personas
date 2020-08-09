import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private personaService: PersonasService) {
    this.personaService.saludar.subscribe((indice: number) => {
      alert('El indice es: ' + (indice + 1));
    });
  }

  ngOnInit(): void {
  }

  onAgregarPersona(): void {
    const persona = new Persona(this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value);
    this.personaService.agregarPersona(persona);
  }

}
