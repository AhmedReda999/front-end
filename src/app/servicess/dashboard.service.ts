import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:3000/api/dashboard';  // Base API URL for dashboard operations

  constructor(private http: HttpClient) {}

  // Get content data from the back-end
  getComponentData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Update content on the back-end
  updateComponentData(content: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${content.id}`, content);
  }

  // Delete content on the back-end
  deleteComponentData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
