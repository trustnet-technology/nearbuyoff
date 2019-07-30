import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { OtpModel } from "../models/otp-model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class OtpService {
  private apiKey = "Enter OTP Service API key";
  private getOtpUrl = "https://2factor.in/API/V1";
  constructor(private http: HttpClient) {}

  getOTP(phoneNo: string): Observable<OtpModel[]> {
    const url = `${this.getOtpUrl}/${this.apiKey}/SMS/+91${phoneNo}/AUTOGEN`;
    return this.http.get<OtpModel[]>(url);
  }
  sendOTP(otpVal: string, sessionID: string): Observable<OtpModel[]> {
    const url = `${this.getOtpUrl}/${
      this.apiKey
    }/SMS/VERIFY/${sessionID}/${otpVal}`;
    return this.http.get<OtpModel[]>(url);
  }
}
