import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Client } from '../models/client.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) { }

  apiUrl = '/api/client';

  private handleError(error: HttpErrorResponse) {

    if (error.error.errors) {
      const mongoErrors = error.error.errors;
      let message = '';

      for (const key in mongoErrors) {
        if (mongoErrors.hasOwnProperty(key)) {
          message = `MongoDB error at field ${key}: ${mongoErrors[key].message}`;
          break;
        }
      }

      return throwError(message);
    } else if (error.error.message) {
      return throwError(error.error.message);
    } else if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl + '/' + id, client)
      .pipe(
        catchError(this.handleError)
      );
  }  

  getAll() {
    return this.http.get<any>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Client>(this.apiUrl + '/' + id);
  }

  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
