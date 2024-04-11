import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { FiguraCirculo } from '../modelo/figurasgeometricas';

@Component({
  selector: 'app-figura-circulo',
  templateUrl: './figura-circulo.component.html',
  styleUrls: ['./figura-circulo.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonCard, FormsModule, IonButton, IonList, IonItem, IonInput]
})
export class FiguraCirculoComponent  implements OnInit {

  CalcularPerimetro(){
    const Radio = parseInt(this.RadioStr)
    const TipoDeFigura = new FiguraCirculo(Radio)
    const perimetro = TipoDeFigura.CalcularPerimetro()
    this.resultado = `El perimetro del circulo es ${perimetro}`
  }
  resultado: string = "";

  RadioStr: string = "";

  constructor() { }

  ngOnInit() {}

}
