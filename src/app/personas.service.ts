import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona("Juan", "Perez"),
        new Persona("Laura", "Juarez")
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService) { }

    agregarPersona(persona: Persona) {
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre);
        this.personas.push(persona);
    }

    encontrarPersona(index: number): Persona {
        const persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona): void {
        this.personas[index] = persona;
    }
}