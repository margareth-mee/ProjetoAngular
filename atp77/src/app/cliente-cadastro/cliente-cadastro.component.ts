import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  id:number = 0;
  nome:string = "";
  sobrenome:string ="";
  tipocliente:string ="";

  constructor(private clienteService:ClienteService) {

  }

  ngOnInit(): void {
  }

  salvar(){
    let cliente = {
      "id": this.id,
      "nome": this.nome,
      "sobrenome": this.sobrenome,
      "tipocliente": this.tipocliente
    };

    console.log(cliente)
    this.clienteService.salvar(cliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.nome = "";
    this.sobrenome = "";
    this.tipocliente = "";
  }
}
