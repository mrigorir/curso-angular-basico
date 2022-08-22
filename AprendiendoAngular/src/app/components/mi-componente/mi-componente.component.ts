import { Component } from "@angular/core";

@Component({
  selector: 'mi-componente',
  template: `
    <h1 style="color: red;">{{titulo}}</h1>
    <p style="color: purple;"> {{comentario}}</p>
    <small> year: {{year}} </small>
    `
})

export class MiComponente {
  public titulo: string;
  public comentario: string;
  public year: number;

  constructor () {
    this.titulo = "Hola mundo";
    this.comentario = "Estos son mis dominios";
    this.year = 2022;
    console.log("Componente: mi-componente cargado")
  }
}