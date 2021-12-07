import { Cliente } from './../model/Cliente';
import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  cliente = {} as Cliente;

  constructor(private clienteService:ClienteService) {

  }

  ngOnInit(): void {
  }

  salvar(){
    this.clienteService.salvar(this.cliente);
    this.limpar();
  }

  private limpar(){
    this.cliente.id = 0;
    this.cliente.nome = "";
    this.cliente.sobrenome = "";
    this.cliente.tipocliente = "";
  }
}
