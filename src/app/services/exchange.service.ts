import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExchangeService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
}
