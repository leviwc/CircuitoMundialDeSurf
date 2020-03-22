import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BateriaComponent } from './components/bateria/bateria.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { OndaComponent } from './components/onda/onda.component';
import { AddSurfistaComponent } from './components/add-surfista/add-surfista.component';
import { AddBateriaComponent } from './components/add-bateria/add-bateria.component';
import { AddOndaComponent } from './components/add-onda/add-onda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BateriaComponent,
    RodapeComponent,
    OndaComponent,
    AddSurfistaComponent,
    AddSurfistaComponent,
    AddBateriaComponent,
    AddOndaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
