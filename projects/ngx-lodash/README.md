# NgxLodash

[lodash](https://lodash.com/) as ngx-lodash

## How to use

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxLodashModule } from "ngx-lodash";

@NgModule({
  imports: [NgxLodashModule], // for consumption within the scope of the module
  exports: [NgxLodashModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { Inject } from "@angular/core";
import { LoDashStatic } from "lodash";
import { LODASH_TOKEN } from "ngx-lodash";

export class SomeClass {
  constructor(@Inject(LODASH_TOKEN) private _: LoDashStatic) {}
}
```

### For testing

```typescript
import { NgxLodashModule } from 'ngx-lodash';
import { LoDashStatic } from "lodash";
import { LODASH_TOKEN } from "ngx-lodash";

describe('TestingTitle', () => {
  let _: LoDashStatic;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxLodashModule]
      });

      _ = TestBed.get(LODASH_TOKEN);
    }));
  }));
}));
```
