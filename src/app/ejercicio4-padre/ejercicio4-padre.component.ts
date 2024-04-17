import { Component } from '@angular/core';
import { Ejercicio1HijoComponent } from '../ejercicio1-hijo/ejercicio1-hijo.component';

@Component({
  selector: 'app-ejercicio4-padre',
  standalone: true,
  imports: [Ejercicio1HijoComponent],
  templateUrl: './ejercicio4-padre.component.html',
  styleUrl: './ejercicio4-padre.component.css'
})
export class Ejercicio4PadreComponent {
/*ListaPersonas:Persona[] = [];

recibirPersonas (persona: Persona){
  console.log("Producto recibido:" + persona.nombre);
  if(!this.ListaPersonas.includes(persona)){
    this.ListaPersonas.push(persona);
  }
}

borrarUltimo (){
  this.ListaPersonas.pop();
}

filtrarEdades(){
  let listaFiltrada = this.ListaPersonas.filter(persona) 
}
*/
}
