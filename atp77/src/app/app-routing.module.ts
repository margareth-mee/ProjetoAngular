import { HomeComponent } from './home/home.component';
import { TipoclienteCadastroComponent } from './tipocliente-cadastro/tipocliente-cadastro.component';
import { TipoclienteListaComponent } from './tipocliente-lista/tipocliente-lista.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'clientes', component: ClienteListaComponent},
  {path:'clientes/cadastrar', component: ClienteCadastroComponent},
  {path:'tiposclientes', component: TipoclienteListaComponent},
  {path:'tiposclientes/cadastrar', component: TipoclienteCadastroComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
