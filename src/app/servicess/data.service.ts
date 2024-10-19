import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<any>(null);  // BehaviorSubject to store and share data
  currentData = this.dataSource.asObservable();  // Observable to access the current data

  constructor() {}

  // Set new data to be shared across components
  setData(data: any): void {
    this.dataSource.next(data);
  }

  // Get the shared data as an observable
  getData(): Observable<any> {
    return this.currentData;
  }
}
