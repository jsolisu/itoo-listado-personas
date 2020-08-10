import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Juarez')
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService, private dataService: DataService) { }

    agregarPersona(persona: Persona) {
        this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre);
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number): Persona {
        const persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona): void {
        this.personas[index] = persona;
    }

    eliminarPersona(index: number): void {
        this.personas.splice(index, 1);
    }
}
