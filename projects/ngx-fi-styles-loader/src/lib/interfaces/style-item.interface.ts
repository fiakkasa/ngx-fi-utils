import { Observable } from 'rxjs';

export interface StyleItem {
  key: string;
  url: string;
  $: Observable<string>;
}
