import { TipoCliente } from './../model/TipoCliente';
import { TipoclienteService } from './../services/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipocliente-lista',
  templateUrl: './tipocliente-lista.component.html',
  styleUrls: ['./tipocliente-lista.component.css']
})
export class TipoclienteListaComponent implements OnInit {
  lista:TipoCliente[]

  constructor(private tipoclienteService:TipoclienteService) {
    this.lista = [];
    this.listar();
   }

  ngOnInit(): void {
  }

  private listar(){
    this.tipoclienteService.listar().subscribe((tiposclientes)=>this.lista=tiposclientes);
  }

}
