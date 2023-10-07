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
  precioPorBoleta: number = 1200.0; // Precio en centavos ($12,000)
  maxBoletasCompradas: number = 0; // Límite inicial
  calcularPrecio: boolean = false;
  descuentoAdicionalTarjeta: number = 0.10; // Descuento adicional por tarjeta Cineco
  numCompradores: number =0;


  ngOnInit(): void {
    this.nombrePersona = '';
    this.numBoletas = 0;
    this.tarjetaCineco = false;
  }

  procesarCompra() {
    if (this.numBoletas / this.numCompradores > 7)  {
      alert(`No puedes comprar más de 7 boletas.`);
    }
    let precio = this.numBoletas * this.precioPorBoleta;

    if (this.numBoletas >= 5) {
      precio *= (1 - 0.15); // Descuento del 15% para más de 5 boletos
    } else if (this.numBoletas >= 3) {
      precio *= (1 - 0.10); // Descuento del 10% para 3, 4 o 5 boletos
    }

    if (this.tarjetaCineco) {
      precio *= (1 - this.descuentoAdicionalTarjeta); // Descuento adicional del 10% por tarjeta Cineco
    }

    this.precioAPagar = precio / 100; // Convertir el precio a pesos
  }
}
