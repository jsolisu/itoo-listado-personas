import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    guardarPersonas(personas: Persona[]) {
        this.httpClient.put('https://listado-personas-1ee1c.firebaseio.com/personas.json', personas).subscribe(
            response => {
                console.log('guardarPersonas: resultado = ' + JSON.stringify(response));
            },
            error => {
                console.log('guardarPersonas: error = ' + JSON.stringify(error));
            }
        );
    }

    cargarPersonas() {
        return this.httpClient.get('https://listado-personas-1ee1c.firebaseio.com/personas.json');
    }
}
