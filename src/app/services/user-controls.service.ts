import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { OrderNowModel, AddToCartModel } from "../models/user.model";
import { PostLeadModel } from "../models/post-lead.model";

@Injectable({
  providedIn: "root"
})
export class UserControlsService {
  constructor(private http: HttpClient) {}
  addToCart(body: AddToCartModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    const path = "/nearby/userCart";
    return this.http
      .post(`${environment.base_url}${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }
  viewCart(userID: string): Observable<any> {
    const path = "/nearby/userCart";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { userId: userID }
      })
      .pipe(catchError(this.formatErrors));
  }
  order(body: OrderNowModel) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    const path = "/nearby/userOrder";
    return this.http
      .post(`${environment.base_url}${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }
  viewOrders(userID: string): Observable<any> {
    const path = "/nearby/userOrder";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { userId: userID }
      })
      .pipe(catchError(this.formatErrors));
  }
  postLead(body: PostLeadModel): Observable<any> {
    const path = "/leads/generate";
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(
        `${environment.admin_base_url}${path}`,
        JSON.stringify(body),
        httpOptions
      )
      .pipe(catchError(this.formatErrors));
  }
  private formatErrors(error: any) {
    console.log(error.error);
    return throwError(error.error);
  }
}
