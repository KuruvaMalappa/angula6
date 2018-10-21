import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { Categories, IModelFormulaTableData } from './categories-model';
import { BehaviorSubject } from 'rxjs';

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable({
  providedIn: 'root'
})
export class CategoriesTreeService {
  categorieDataChange: any = new BehaviorSubject<Categories[]>([]);
  modelFormulaTableDataChange: any = new BehaviorSubject<IModelFormulaTableData[]>([]);

  constructor(private _http: HttpClient) { }
  getCategoriesList() {
    return this._http.get('./../../src/app/data/categories.json').pipe(
      tap(response => response),
      catchError(this.handleError('failtoloadcategories', []))
    );
  }

  categoriesRunModel(data) {
    // Please replace post method url here
    return this._http.post('./../../src/app/data/categories.json', data).pipe(
      tap(response => response),
      catchError(this.handleError('categoriesRunModel', []))
    );
  }

  getModelProcessData() {
    return this._http.get('./../../src/app/data/modelProcessedData.json').pipe(
      tap(response => response),
      catchError(this.handleError('modelProcessedData', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
