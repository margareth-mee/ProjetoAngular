import { Cliente } from './../model/Cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private lista:Array<Cliente>;

  constructor() {
    this.lista = [];
  }

  salvar(cliente:Cliente):void{
   /*  console.log("salvar do service:", cliente); */
    this.lista.push(cliente);
  }

  listar():Cliente[]{
    return this.lista;
  }
}
