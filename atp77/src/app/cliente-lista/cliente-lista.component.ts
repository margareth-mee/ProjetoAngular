import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  lista:any[]

  constructor(private clienteService:ClienteService) {
    this.lista = [];
    this.listar();
   }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.clienteService.listar();
  }

}
