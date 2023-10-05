import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  nombrePersona: string = '';
  numBoletas: number = 0;
  tarjetaCineco: boolean = false;
  precioAPagar: number = 0;
  maxBoletasCompradas: number = 0;

  actualizarMaxBoletas(): void {
    this.maxBoletasCompradas = Math.min(7, this.numBoletas);
  }

  ngOnInit(): void {
    this.nombrePersona = '';
    this.numBoletas = 0;
    this.tarjetaCineco = true;

    

  }

  procesarCompra(): void {
    const precioPorBoleta = 12;
    let descuento = 0;
  
    if (this.numBoletas > 5) {
      descuento = 0.15;
    } else if (this.numBoletas >= 3) {
      descuento = 0.1;
    }
  
    if (this.tarjetaCineco) {
      descuento += 0.1;
    }
  
    const precioTotal = this.numBoletas * precioPorBoleta;
    const descuentoTotal = precioTotal * descuento;
    this.precioAPagar = precioTotal - descuentoTotal;
    this.nombrePersona = this.nombrePersona
    this.maxBoletasCompradas = Math.min(7, this.numBoletas);
  }
}
