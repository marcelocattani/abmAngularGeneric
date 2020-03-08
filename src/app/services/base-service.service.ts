import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BaseServiceService<T> {
  public baseUrl: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.baseUrl + id);
  }

  post(persona: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, persona);
  }

  put(id: number, persona: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + id, persona);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
