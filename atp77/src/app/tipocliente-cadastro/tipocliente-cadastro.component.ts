import { TipoCliente } from './../model/TipoCliente';
import { TipoclienteService } from './../services/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipocliente-cadastro',
  templateUrl: './tipocliente-cadastro.component.html',
  styleUrls: ['./tipocliente-cadastro.component.css']
})
export class TipoclienteCadastroComponent implements OnInit {
  tipocliente = {} as TipoCliente;

  constructor(private tipoclienteService:TipoclienteService) {
   }

  ngOnInit(): void {
  }

  salvar(){

    this.tipoclienteService.salvar(this.tipocliente).subscribe((msg)=>{
      console.log(msg);
      this.limpar();
    });
  }

  private limpar(){
    this.tipocliente = {} as TipoCliente;
  }
}
