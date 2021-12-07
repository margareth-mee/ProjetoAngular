import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cliente } from './../model/Cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string;

  constructor(private hhtpClient:HttpClient) {
   this.url = 'http://localhost:8200/api/cliente';
  }

  salvar(cliente:Cliente):Observable<string>{
    return this.hhtpClient.post(this.url, cliente, {responseType:'text'});
  }

  listar():Observable<Cliente[]>{
    return this.hhtpClient.get<Cliente[]>(this.url);
  }
}
