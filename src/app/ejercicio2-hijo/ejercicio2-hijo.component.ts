import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio2-hijo',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2-hijo.component.html',
  styleUrl: './ejercicio2-hijo.component.css'
})
export class Ejercicio2HijoComponent {
  @Output()
  llamadaPadre : EventEmitter<string> = new EventEmitter();

  productos = ['pan' , 'agua' , 'leche' ,'cafe', 'azucar', 'heuvos']

  enviarPadre(nombre: string) {
    this.llamadaPadre.emit(nombre);
  }
}
