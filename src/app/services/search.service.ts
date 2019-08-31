import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient) {}
  getResultsOfSearch(
    minPRice: string,
    producTName: string,
    subCategoryID: string
  ): Observable<any> {
    const path = "/nearby/search";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: {
          minPrice: minPRice,
          productName: producTName,
          subCategoryId: subCategoryID
        }
      })
      .pipe(catchError(this.formatErrors));
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
