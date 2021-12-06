import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteService {
  private lista:Array<any>;

  constructor() {
    this.lista = [];
  }

  salvar(tipocliente:any):void{
    console.log("salvar do service:", tipocliente);
    this.lista.push(tipocliente);
  }

  listar():any[]{
    return this.lista;
  }
}
