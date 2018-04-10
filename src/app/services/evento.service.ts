import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Evento } from '../models/evento';
import { EVENTOS } from '../mock-eventos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class EventoService {
 
  private eventosUrl = 'api/eventos';  // URL to web api
 
  constructor(
    private http: HttpClient) { }
 
  /** GET heroes from the server */
  getEventos (): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.eventosUrl)
      .pipe(
        catchError(this.handleError('getEventos', []))
      );
  }
 
  /** GET hero by id. Return `undefined` when id not found */
  getEventoNo404<Data>(id: number): Observable<Evento> {
    const url = `${this.eventosUrl}/?id=${id}`;
    return this.http.get<Evento[]>(url)
      .pipe(
        map(eventos => eventos[0]), // returns a {0|1} element array
        tap(e => {
          const outcome = e ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Evento>(`getEvento id=${id}`))
      );
  }
 
  /** GET hero by id. Will 404 if id not found */
  getEvento(id: number): Observable<Evento> {
    const url = `${this.eventosUrl}/${id}`;
    return this.http.get<Evento>(url).pipe(
      catchError(this.handleError<Evento>(`getEvento id=${id}`))
    );
  }
 
 
  //////// Save methods //////////
 
  /** POST: add a new hero to the server */
  addEvento (evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.eventosUrl, evento, httpOptions).pipe(
      catchError(this.handleError<Evento>('addEvento'))
    );
  }
 
  /** DELETE: delete the hero from the server */
  deleteEvento (evento: Evento | number): Observable<Evento> {
    const id = typeof evento === 'number' ? evento : evento.id;
    const url = `${this.eventosUrl}/${id}`;
 
    return this.http.delete<Evento>(url, httpOptions).pipe(
      catchError(this.handleError<Evento>('deleteEvento'))
    );
  }
 
  /** PUT: update the hero on the server */
  updateEvento (evento: Evento): Observable<any> {
    return this.http.put(this.eventosUrl, evento, httpOptions).pipe(
      catchError(this.handleError<any>('updateEvento'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}