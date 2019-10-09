// tslint:disable:component-selector
import { Component, Input, NgModule } from '@angular/core';
import { Dictionary } from 'lodash';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StyleHandlingMode } from './enums/style-handling-mode.enum';
import { IStylesLoaderComponent } from './interfaces/istyles-loader-component.interface';
import { IStylesLoaderRawComponent } from './interfaces/istyles-loader-raw-component.interface';
import { IStylesLoaderService } from './interfaces/istyles-loader-service.interface';
import { StyleItem } from './interfaces/style-item.interface';
import { StylesLoaderConfig } from './interfaces/styles-loader-config.interface';
import { StylesLoaderService } from './services/styles-loader.service';

@Component({
  selector: 'styles-loader',
  template: 'styles-loader'
})
export class StylesLoaderMockComponent implements IStylesLoaderComponent {
  Items: StyleItem[] = [];
  @Input() Config: StylesLoaderConfig;
}

@Component({
  selector: 'styles-loader-raw',
  template: 'styles-loader-raw'
})
export class StylesLoaderRawMockComponent implements IStylesLoaderRawComponent {
  Items: string[];
  @Input() Collection: string[];
}

export class StylesLoaderMockService implements IStylesLoaderService {
  loadingStyles$: Observable<Dictionary<string>> = new BehaviorSubject({});

  isStyleLoading = (url: string): boolean => false;

  isStyleLoading$ = (url: string): Observable<boolean> => of(false);

  areStylesLoading = (urls: string[]): boolean => false;

  areStylesLoading$ = (urls: string[]): Observable<boolean> => of(false);

  getStyle$ = (url: string, styleHandlingMode?: StyleHandlingMode): Observable<string> => of(null);
}

const components = [StylesLoaderMockComponent, StylesLoaderRawMockComponent];

@NgModule({
  declarations: components,
  entryComponents: components,
  exports: [...components],
  providers: [
    {
      provide: StylesLoaderService,
      useClass: StylesLoaderMockService
    }
  ]
})
export class NgxFiStylesLoaderTestingModule {}
