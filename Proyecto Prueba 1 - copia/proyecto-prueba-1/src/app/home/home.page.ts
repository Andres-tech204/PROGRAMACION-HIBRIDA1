import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelectOption, IonSelect, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { IonSelectCustomEvent} from '@ionic/core';
import { CommonModule } from '@angular/common';
import { FiguraCirculoComponent } from '../figura-circulo/figura-circulo.component';
import { FiguraTrianguloComponent } from '../figura-triangulo/figura-triangulo.component';
import { TrianguloEquilateroComponent } from '../triangulo-equilatero/triangulo-equilatero.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, FiguraCirculoComponent, FiguraTrianguloComponent, IonSelectOption, IonSelect, CommonModule, TrianguloEquilateroComponent]
})
export class HomePage {
  TipoDeFigura:string = ""

  constructor(){}

  esFiguraCirculo () {return this.TipoDeFigura == "Circulo"}
  esFiguraTriangulo () {return this.TipoDeFigura == "Triangulo"}
  esTrianguloEquilatero () {return this.TipoDeFigura == "TrianguloEquilatero"}

  seleccionarTipodeFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>){
    this.TipoDeFigura = $event.detail.value
  }



}

