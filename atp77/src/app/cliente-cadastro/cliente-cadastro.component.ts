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
    this.clienteService.salvar(this.cliente).subscribe((msg)=>{
      console.log(msg);
      this.limpar();
    });
  }

  private limpar(){
    this.cliente = {} as Cliente;
  }
}
