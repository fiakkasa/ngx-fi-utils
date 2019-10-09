import { Dictionary } from 'lodash';
import { Observable } from 'rxjs';
import { StyleHandlingMode } from '../enums/style-handling-mode.enum';

export interface IStylesLoaderService {
  loadingStyles$: Observable<Dictionary<string>>;

  isStyleLoading(url: string): boolean;

  isStyleLoading$(url: string): Observable<boolean>;

  areStylesLoading(urls: string[]): boolean;

  areStylesLoading$(urls: string[]): Observable<boolean>;

  getStyle$(url: string, styleHandlingMode?: StyleHandlingMode): Observable<string>;
}
