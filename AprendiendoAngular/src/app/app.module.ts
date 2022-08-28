import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
//Forms
import { FormsModule } from '@angular/forms';
//Services
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    HolaMundoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
