import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PollutionListComponent } from './components/pollution-list/pollution-list.component';
import { PollutionDetailComponent } from './components/pollution-detail/pollution-detail.component';
import { PollutionFormComponent } from './components/pollution-form/pollution-form.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurSigninComponent } from './components/utilisateur-signin/utilisateur-signin.component';
import { UtilisateurLoginComponent } from './components/utilisateur-login/utilisateur-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PollutionListComponent,
    PollutionDetailComponent,
    PollutionFormComponent,
    UtilisateurSigninComponent,
    UtilisateurLoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
