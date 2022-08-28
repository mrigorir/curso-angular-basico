import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    HolaMundoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
