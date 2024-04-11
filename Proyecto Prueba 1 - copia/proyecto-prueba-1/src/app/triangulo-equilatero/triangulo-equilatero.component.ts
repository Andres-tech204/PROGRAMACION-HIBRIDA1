import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonImg, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero } from '../modelo/figurasgeometricas';

@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './triangulo-equilatero.component.html',
  styleUrls: ['./triangulo-equilatero.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonImg, FormsModule, IonButton, IonList, IonItem, IonInput]
})
export class TrianguloEquilateroComponent  implements OnInit {
  CalcularPerimetro(){
    
    const ladoA = parseInt(this.ladoAStr)
    const TipoDeFigura = new TrianguloEquilatero(ladoA)
    const perimetro = TipoDeFigura.CalcularPerimetro()
    this.resultado = `El perimetro del triangulo es ${perimetro}`
  }

  constructor() { }

  ngOnInit() {}

  resultado: string = "";

  ladoAStr: string = "";

}
