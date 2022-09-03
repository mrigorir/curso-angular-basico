import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {RouterModule, Route} from  '@angular/router';
//Components
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './components/about/about.component';
//Forms
import { FormsModule } from '@angular/forms';
//Services
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];

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
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
