import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number= 0;

  calcularResultado(){
    this.resultado=Math.pow(this.numero1, this.numero2);
  }
}
