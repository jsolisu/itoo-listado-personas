import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, PersonasService, DataService, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
