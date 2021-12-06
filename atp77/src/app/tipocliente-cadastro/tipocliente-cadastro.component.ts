import { TipoclienteService } from './../services/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipocliente-cadastro',
  templateUrl: './tipocliente-cadastro.component.html',
  styleUrls: ['./tipocliente-cadastro.component.css']
})
export class TipoclienteCadastroComponent implements OnInit {
  id:number = 0;
  nome:string = "";
  descricao:string ="";

  constructor(private tipoclienteService:TipoclienteService) {
   }

  ngOnInit(): void {
  }

  salvar(){
    let tipocliente = {
      "id": this.id,
      "nome": this.nome,
      "descricao": this.descricao,
    };

    console.log(tipocliente)
    this.tipoclienteService.salvar(tipocliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.nome = "";
    this.descricao = "";
  }
}
