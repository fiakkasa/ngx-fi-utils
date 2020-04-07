# NgxFiStylesLoader

A streamlined approach to load styles dynamically

## Installation

- `npm i lodash --save`
- `npm i @types/lodash --save-dev`
- `npm i ngx-fi-lodash --save`
- `npm i ngx-fi-styles-loader --save`

## How to use

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiStylesLoaderModule } from "ngx-fi-styles-loader";

@NgModule({
  imports: [NgxFiStylesLoaderModule], // for consumption within the scope of the module
  exports: [NgxFiStylesLoaderModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { StyleHandlingMode, StylesLoaderService } from "ngx-fi-styles-loader";

export class SomeClass {
  constructor(private loaderService: StylesLoaderService) {}
}
```

### For testing

```typescript
import { NgxFiStylesLoaderTestingModule, StylesLoaderMockService, StylesLoaderService } from "ngx-fi-styles-loader";

describe('TestingTitle', () => {
  let stylesLoaderService: StylesLoaderMockService;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiStylesLoaderTestingModule]
      });

      stylesLoaderService = TestBed.get(StylesLoaderService);
    }));
  }));
}));
```

### Notes

- components:
  - `StylesLoaderComponent` / `styles-loader`: to be used when managed loading of styles is required
  - `StylesLoaderRawComponent` / `styles-loader-raw`: to be used when un-managed loading of styles is required
- enums:
  - `StyleHandlingMode`
  - `PassThrough`: just passes the url to be loaded
  - `VerifiedPassThrough`: downloads content first, passed the url to be loaded on success
  - `Literal`: downloads the content and passes it as an object url; should not be used when stylesheet contains any relative paths referencing assets
- services:

  - `StylesLoaderService`: used in conjuction with `StylesLoaderComponent` to load styles; in addition, info regarding the loading status of a style(s) are provided

    ```typescript
    export interface IStylesLoaderService {
      loadingStyles$: Observable<{ [key: string]: string }>;

      isStyleLoading(url: string): boolean;

      isStyleLoading$(url: string): Observable<boolean>;

      areStylesLoading(urls: string[]): boolean;

      areStylesLoading$(urls: string[]): Observable<boolean>;

      getStyle$(url: string, styleHandlingMode?: StyleHandlingMode): Observable<string>;
    }
    ```
