# NgxFiOnline

navigator.onLine wrapper

## Installation

- `npm i ngx-fi-online --save`

## How to use

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiOnlineModule } from "ngx-fi-online";

@NgModule({
  imports: [NgxFiOnlineModule], // for consumption within the scope of the module
  exports: [NgxFiOnlineModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { Inject } from "@angular/core";
import { OnlineDefinition, ONLINE_TOKEN } from "ngx-fi-online";

export class SomeClass {
  constructor(@Inject(ONLINE_TOKEN) private online: OnlineDefinition) {
    const isOnline = online.is();
  }
}
```

### For testing

```typescript
import { NgxFiOnlineModule } from "ngx-fi-online";
import { OnlineDefinition, ONLINE_TOKEN } from "ngx-fi-online";

describe('TestingTitle', () => {
  let online: OnlineDefinition;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiOnlineModule]
      });

      online = TestBed.get(ONLINE_TOKEN);
    }));
  }));
}));
```
