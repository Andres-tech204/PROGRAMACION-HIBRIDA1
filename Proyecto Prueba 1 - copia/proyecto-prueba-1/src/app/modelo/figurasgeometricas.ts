export abstract class FiguraGeometrica{
    TipoDeFigura:string

    constructor(TipoDeFigura:string){

    
    this.TipoDeFigura = TipoDeFigura
    
    }
    abstract CalcularPerimetro():number
    
}

export class FiguraCirculo extends FiguraGeometrica{
    Radio: number
    constructor(Radio:number){
        super("Circulo")
        this.Radio = Radio
    }
    override CalcularPerimetro(): number {
        return 2 * Math.PI * this.Radio;
    }
}

export class FiguraTriangulo extends FiguraGeometrica{
    ladoA: number
    ladoB: number
    ladoC: number

    constructor(ladoA:number, ladoB:number, ladoC:number){
        super("Triangulo")
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }
    override CalcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
export class TrianguloEquilatero extends FiguraGeometrica{
    ladoA:number

    constructor(ladoA:number){
        super("TrianguloEquilatero")
        this.ladoA = ladoA
    }
    override CalcularPerimetro(): number {
        return this.ladoA * 3
    }
}