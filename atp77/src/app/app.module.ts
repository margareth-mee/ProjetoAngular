import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { TipoclienteListaComponent } from './tipocliente-lista/tipocliente-lista.component';
import { TipoclienteCadastroComponent } from './tipocliente-cadastro/tipocliente-cadastro.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TipoclienteListaComponent,
    TipoclienteCadastroComponent,
    ClienteListaComponent,
    ClienteCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
