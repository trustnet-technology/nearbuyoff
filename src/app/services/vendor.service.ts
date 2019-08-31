import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  constructor(private http: HttpClient) {}
  getVendorDetail(sellerID: string): Observable<any> {
    const path = "/nearby/sellerDetail";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { sellerId: sellerID }
      })
      .pipe(catchError(this.formatErrors));
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
