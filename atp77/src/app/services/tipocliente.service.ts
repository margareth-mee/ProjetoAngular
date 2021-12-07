import { Observable } from 'rxjs';
import { TipoCliente } from './../model/TipoCliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteService {
  private url:string;

  constructor(private httpClient:HttpClient) {
    this.url = 'http://localhost:8200/api/tipocliente';
  }

  salvar(tipocliente:TipoCliente):Observable<string>{
    return this.httpClient.post(this.url, tipocliente, {responseType:'text'});
  }

  listar():Observable<TipoCliente[]>{
    return this.httpClient.get<TipoCliente[]>(this.url);
  }
}
