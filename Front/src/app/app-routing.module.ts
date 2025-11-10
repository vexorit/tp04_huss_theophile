import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PollutionListComponent } from "./components/pollution-list/pollution-list.component";
import { PollutionDetailComponent } from "./components/pollution-detail/pollution-detail.component";
import { PollutionFormComponent } from "./components/pollution-form/pollution-form.component";
import { UtilisateurSigninComponent } from "./components/utilisateur-signin/utilisateur-signin.component";
import { UtilisateurLoginComponent } from "./components/utilisateur-login/utilisateur-login.component";

const routes: Routes = [
  { path: "", redirectTo: "/utilisateur/login", pathMatch: "full" },
  { path: "utilisateur/signin", component: UtilisateurSigninComponent },
  { path: "utilisateur/login", component: UtilisateurLoginComponent },
  { path: "pollutions", component: PollutionListComponent },
  { path: "pollutions/:id", component: PollutionDetailComponent },
  { path: "pollution-form", component: PollutionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
