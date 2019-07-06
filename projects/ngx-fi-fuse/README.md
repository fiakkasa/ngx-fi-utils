# NgxFiFuse

[fuse](https://fusejs.io/) as ngx-fi-fuse

## Installation

- `npm i fuse.js --save`
- `npm i ngx-fi-fuse --save`

## How to use

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiFuseModule } from "ngx-fi-fuse";

@NgModule({
  imports: [NgxFiFuseModule], // for consumption within the scope of the module
  exports: [NgxFiFuseModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { Inject } from "@angular/core";
import { FuseOptions } from "fuse.js";
import { FuseFactoryDefinition, FUSE_TOKEN } from "ngx-fi-fuse";

export interface SomeItem {}

export class SomeClass {
  constructor(@Inject(FUSE_TOKEN) private fuseFactory: FuseFactoryDefinition) {
    const collection: SomeItem[] = [];
    const options: FuseOptions<SomeItem> = {};
    const fuse = this.fuseFactory<SomeItem>(collection, options);
  }
}
```

### For testing

```typescript
import { NgxFiFuseModule } from "ngx-fi-fuse";
import { FuseFactoryDefinition, FUSE_TOKEN } from "ngx-fi-fuse";

describe('TestingTitle', () => {
  let fuseFactory: FuseFactoryDefinition;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiFuseModule]
      });

      fuseFactory = TestBed.get(FUSE_TOKEN);
    }));
  }));
}));
```
