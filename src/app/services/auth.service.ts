import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { SignInModel } from "../models/sign-in.model";
import { SignUpModel } from "../models/sign-up.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signIn(body: SignInModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    const path = "/auth/signin";
    return this.http
      .post(`${environment.base_url}${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }
  signUp(body: SignUpModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    const path = "/auth/signup";
    return this.http
      .post(`${environment.base_url}${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
