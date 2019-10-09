import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Dictionary, LoDashStatic } from 'lodash';
import { LODASH_TOKEN } from 'ngx-fi-lodash';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map } from 'rxjs/operators';
import { StyleHandlingMode } from '../enums/style-handling-mode.enum';
import { IStylesLoaderService } from '../interfaces/istyles-loader-service.interface';

@Injectable({
  providedIn: 'root'
})
export class StylesLoaderService implements IStylesLoaderService {
  private readonly loadingStylesSubscription = new BehaviorSubject<Dictionary<string>>({});
  readonly loadingStyles$ = this.loadingStylesSubscription.asObservable();

  constructor(@Inject(LODASH_TOKEN) private _: LoDashStatic, private http: HttpClient) {}

  isStyleLoading = (url: string): boolean => !!this._.get(this.loadingStylesSubscription.getValue(), url);

  isStyleLoading$ = (url: string): Observable<boolean> =>
    this.loadingStyles$.pipe(
      map(x => !!this._.get(x, url)),
      distinctUntilChanged()
    )

  areStylesLoading = (urls: string[]): boolean => !!this._.size(this._.pick(this.loadingStylesSubscription.getValue(), urls));

  areStylesLoading$ = (urls: string[]): Observable<boolean> =>
    this.loadingStyles$.pipe(
      map(x => !!this._.size(this._.pick(x, urls))),
      distinctUntilChanged()
    )

  private removeFromLoading = (url: string): void =>
    this.loadingStylesSubscription.next(this._.omit(this.loadingStylesSubscription.getValue(), url))

  getStyle$ = (url: string, styleHandlingMode?: StyleHandlingMode): Observable<string> => {
    if (!(!!url && this._.isString(url)) || this.isStyleLoading(url)) {
      return of(null);
    }

    const shm = this._.get(StyleHandlingMode, styleHandlingMode, StyleHandlingMode.VerifiedPassThrough);

    if (shm === StyleHandlingMode.PassThrough) {
      return of(url);
    }

    this.loadingStylesSubscription.next(this._.assign({}, this.loadingStylesSubscription.getValue(), { [url]: url }));

    const request = this.http.get(url, { responseType: 'blob' });

    return (shm === StyleHandlingMode.Literal //
      ? request.pipe(map(result => URL.createObjectURL(result)))
      : request.pipe(map(() => url))
    ).pipe(
      catchError(error => {
        console.error(error);
        return of(null);
      }),
      finalize(() => this.removeFromLoading(url))
    );
  }
}
