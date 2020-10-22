import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(credential: Credential): Observable<Token>{
    return this.httpClient.post<Token> (`${environment.apiUrl}/auth/login`,credential);
  }
}
