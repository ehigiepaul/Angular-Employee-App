import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudBase<T> {

  _url = "http://localhost:5049/api"
  _http: HttpClient;
  _path?: string;

  constructor(http: HttpClient) {
    this._http = http;
  }

  GetAll() {
    return this._http.get<T[]>(`${this._url}/${(this._path)}`)
      .pipe(catchError(this.ErrorHandler))
  }


  Get(id: any){
    return this._http.get<T>(`${this._url}/${this._path}/${id}`).pipe(catchError(this.ErrorHandler));
  }

  Update(id: number, data: T) {
    return this._http.put<T>(`${this._url}/${this._path}/${id}`, data).pipe(catchError(this.ErrorHandler));
  }

  Create(data: T){
    return this._http.post<T>(`${this._url}/${this._path}`, data).pipe(catchError(this.ErrorHandler));
  }

  Delete(id:number){
    return this._http.delete<T>(`${this._url}/${this._path}/${id}`).pipe(catchError(this.ErrorHandler));
  }

  ErrorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}
