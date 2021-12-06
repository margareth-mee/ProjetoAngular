import { TipoclienteService } from './../services/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipocliente-lista',
  templateUrl: './tipocliente-lista.component.html',
  styleUrls: ['./tipocliente-lista.component.css']
})
export class TipoclienteListaComponent implements OnInit {
  lista:any[]

  constructor(private tipoclienteService:TipoclienteService) {
    this.lista = [];
    this.listar();
   }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.tipoclienteService.listar();
  }

}
