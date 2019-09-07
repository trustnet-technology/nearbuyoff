import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { VendorModel } from "../models/vendor-model";

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
  getProductSellerDetails(sellerID: string): Observable<any> {
    const path = "/nearby/productSellerDetail";
    return this.http
      .get(`${environment.base_url}${path}`, { params: { sellerId: sellerID } })
      .pipe(catchError(this.formatErrors));
  }
  recentVendors(): Observable<VendorModel[]> {
    const path = "/nearby/recentSeller";
    return this.http.get<VendorModel[]>(`${environment.base_url}${path}`);
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
