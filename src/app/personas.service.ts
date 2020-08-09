import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {
    personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Laura', '')];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService) { }

    agregarPersona(persona: Persona): void {
        this.loggingService.enviarMensajeAConsola('Enviamos persona: ' + persona.nombre + ' ' +
            persona.apellido);

        this.personas.push(persona);
    }
}
