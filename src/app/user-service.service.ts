import { Injectable } from '@angular/core';
import { UserLists } from './UserList';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }

  getUserList(): Observable<UserLists[]> {
    return this.http.get<UserLists[]>(this._url)
      .pipe(retry(3), catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error(
        "An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    }

    return throwError("Error occurred. Pleas try again");

  }
}
