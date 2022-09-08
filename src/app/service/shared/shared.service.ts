import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _isCollapsable: BehaviorSubject<any | null> = new BehaviorSubject(false);

  constructor() { }

  collapse(_value: any) {
    // Store the value
    this._isCollapsable.next(_value);
  }

  get collapse$(): Observable<any> {
    return this._isCollapsable.asObservable();
  }

}
