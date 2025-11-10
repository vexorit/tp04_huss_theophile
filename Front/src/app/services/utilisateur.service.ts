import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  pseudo: string;
}

@Injectable({
  providedIn: "root",
})
export class UtilisateurService {
  private apiUrl = environment.apiUrl + "/users";

  constructor(private http: HttpClient) {}

  create(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, user);
  }

  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }
}
