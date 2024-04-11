import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonImg, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { FiguraTriangulo } from '../modelo/figurasgeometricas';

@Component({
  selector: 'app-figura-triangulo',
  templateUrl: './figura-triangulo.component.html',
  styleUrls: ['./figura-triangulo.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonImg, FormsModule, IonButton, IonList, IonItem, IonInput]
})
export class FiguraTrianguloComponent  implements OnInit {

  CalcularPerimetro(){
    const ladoA = parseInt(this.ladoAStr)
    const ladoB = parseInt(this.ladoBStr)
    const ladoC = parseInt(this.ladoCStr)
    const TipoDeFigura = new FiguraTriangulo(ladoA, ladoB, ladoC)
    const perimetro = TipoDeFigura.CalcularPerimetro()
    this.resultado = `El perimetro del triangulo es ${perimetro}`
  }
  resultado: string = "";

  ladoAStr: string = "";

  ladoBStr: string = "";

  ladoCStr: string = "";

  constructor() { }

  ngOnInit() {}

}

