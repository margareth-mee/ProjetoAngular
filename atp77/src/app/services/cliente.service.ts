import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private lista:Array<any>;

  constructor() {
    this.lista = [];
  }

  salvar(cliente:any):void{
    console.log("salvar do service:", cliente);
    this.lista.push(cliente);
  }

  listar():any[]{
    return this.lista;
  }
}
