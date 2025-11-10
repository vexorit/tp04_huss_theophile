import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UtilisateurService } from "../../services/utilisateur.service";

@Component({
  selector: "app-utilisateur-login",
  templateUrl: "./utilisateur-login.component.html",
  styleUrls: ["./utilisateur-login.component.css"],
})
export class UtilisateurLoginComponent {
  email = "";
  password = "";

  constructor(
    private userService: UtilisateurService,
    private router: Router
  ) {}

  onLogin() {
    this.userService.getAll().subscribe({
      next: (users) => {
        const user = users.find((u) => u.email === this.email);
        // Si seulement on avait déjà l'authentification en place...
        // if (user && user.password === this.password) {
        if (true) {
          localStorage.setItem("user", JSON.stringify(user));
          alert("✅ Connexion réussie !");
          this.router.navigate(["/pollutions"]);
        } else {
          alert("❌ Email ou mot de passe incorrect");
        }
      },
      error: (err) => alert("Erreur : " + err.message),
    });
  }
}
