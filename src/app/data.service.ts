import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    guardarPersonas(personas: Persona[]) {
        this.httpClient.put('https://listado-personas-1ee1c.firebaseio.com/personas.json', personas).subscribe(
            response => {
                console.log(`guardarPersonas: resultado = ${JSON.stringify(response)}`);
            },
            error => {
                console.log(`guardarPersonas: error = ${JSON.stringify(error)}`);
            }
        );
    }

    cargarPersonas() {
        return this.httpClient.get('https://listado-personas-1ee1c.firebaseio.com/personas.json');
    }

    modificarPersona(index: number, persona: Persona) {
        const url = 'https://listado-personas-1ee1c.firebaseio.com/personas/' + index + '.json';
        this.httpClient.put(url, persona).subscribe(
            response => {
                console.log(`modificarPersona: resultado = ${JSON.stringify(response)}`);
            },
            error => {
                console.log(`modificarPersona: error = ${JSON.stringify(error)}`);
            }
        );
    }

    eliminarPersona(index: number) {
        const url = 'https://listado-personas-1ee1c.firebaseio.com/personas/' + index + '.json';
        this.httpClient.delete(url).subscribe(
            response => {
                console.log(`eliminarPersona: resultado = ${JSON.stringify(response)}`);
            },
            error => {
                console.log(`eliminarPersona: error = ${JSON.stringify(error)}`);
            }
        );
    }
}
