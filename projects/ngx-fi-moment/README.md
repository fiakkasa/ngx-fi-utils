# NgxFiMoment

[moment](https://momentjs.com/) as ngx-fi-moment

## Installation

- `npm i moment --save`
- `npm i ngx-fi-moment --save`

## How to use

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiMomentModule } from "ngx-fi-moment";

@NgModule({
  imports: [NgxFiMomentModule], // for consumption within the scope of the module
  exports: [NgxFiMomentModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { Inject } from "@angular/core";
import { MomentDefinition, MOMENT_TOKEN } from "ngx-fi-moment";

export class SomeClass {
  constructor(@Inject(MOMENT_TOKEN) private moment: MomentDefinition) {}
}
```

### For testing

```typescript
import { NgxFiMomentModule } from 'ngx-fi-moment';
import { MomentDefinition, MOMENT_TOKEN } from 'ngx-fi-moment';

describe('TestingTitle', () => {
  let moment: MomentDefinition;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiMomentModule]
      });

      moment = TestBed.get(MOMENT_TOKEN);
    }));
  }));
}));
```
