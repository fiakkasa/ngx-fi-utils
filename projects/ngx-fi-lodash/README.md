# NgxFiLodash

[lodash](https://lodash.com/) as ngx-fi-lodash

## Installation

- `npm i lodash --save`
- `npm i @types/lodash --save-dev`
- `npm i ngx-fi-lodash --save`

## How to use

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiLodashModule } from "ngx-fi-lodash";

@NgModule({
  imports: [NgxFiLodashModule], // for consumption within the scope of the module
  exports: [NgxFiLodashModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { Inject } from "@angular/core";
import { LoDashStatic } from "lodash";
import { LODASH_TOKEN } from "ngx-fi-lodash";

export class SomeClass {
  constructor(@Inject(LODASH_TOKEN) private _: LoDashStatic) {}
}
```

### For testing

```typescript
import { NgxFiLodashModule } from 'ngx-fi-lodash';
import { LoDashStatic } from "lodash";
import { LODASH_TOKEN } from "ngx-fi-lodash";

describe('TestingTitle', () => {
  let _: LoDashStatic;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiLodashModule]
      });

      _ = TestBed.get(LODASH_TOKEN);
    }));
  }));
}));
```
