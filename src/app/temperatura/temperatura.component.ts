import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class ConversorComponent {
  celsius: number = 0;
  fahrenheit: number = 0;
  conversionType: string = 'celsiusToFahrenheit'; // Valor predeterminado

  convertir() {
    if (this.conversionType === 'celsiusToFahrenheit') {
      this.fahrenheit = (this.celsius * 9/5) + 32;
    } else if (this.conversionType === 'fahrenheitToCelsius') {
      // Implementa la conversión inversa aquí si es necesario.
    }
  }
}