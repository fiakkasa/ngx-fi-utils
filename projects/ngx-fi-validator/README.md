# NgxFiValidator

[json validator](https://ajv.js.org/) as ngx-fi-validator

## Installation

- `npm i ajv --save`
- `npm i ngx-fi-validator --save`

## How to use Validator

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiValidatorModule } from "ngx-fi-validator";

@NgModule({
  imports: [NgxFiValidatorModule], // for consumption within the scope of the module
  exports: [NgxFiValidatorModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

```typescript
import { Inject } from "@angular/core";
import { ValidatorDefinition, VALIDATOR_TOKEN } from "ngx-fi-validator";

export class SomeClass {
  constructor(@Inject(VALIDATOR_TOKEN) private validator: ValidatorDefinition) {}
}
```

### For testing

```typescript
import { NgxFiValidatorModule } from "ngx-fi-validator";
import { ValidatorDefinition, VALIDATOR_TOKEN } from "ngx-fi-validator";

describe('TestingTitle', () => {
  let validator: ValidatorDefinition;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiValidatorModule]
      });

      validator = TestBed.get(VALIDATOR_TOKEN);
    }));
  }));
}));
```

## How to use Validator Instance Creator With Options

### In a module

```typescript
import { NgModule } from "@angular/core";
import { NgxFiValidatorModule } from "ngx-fi-validator";

@NgModule({
  imports: [NgxFiValidatorModule], // for consumption within the scope of the module
  exports: [NgxFiValidatorModule] // if propagation is required
})
export class SomeModule {}
```

### Where required

_Note: For the full list of options please visit the respective page @ https://github.com/epoberezkin/ajv#options_

```typescript
import { Inject } from "@angular/core";
import {
  AjvOptions,
  ValidatorDefinition,
  ValidatorInstanceCreatorWithOptionsDefinition,
  VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN
} from "ngx-fi-validator";

export class SomeClass {
  private validator: ValidatorDefinition;
  constructor(
    @Inject(VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN) private validatorFactory: ValidatorInstanceCreatorWithOptionsDefinition
  ) {
    const options: AjvOptions = {
      /*options: https://github.com/epoberezkin/ajv#options*/
    };
    this.validator = this.validatorFactory(options);
  }
}
```

### For testing

```typescript
import { NgxFiValidatorModule } from "ngx-fi-validator";
import {
  ValidatorInstanceCreatorWithOptionsDefinition,
  VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN
} from "ngx-fi-validator";

describe('TestingTitle', () => {
  let validatorFactory: ValidatorInstanceCreatorWithOptionsDefinition;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NgxFiValidatorModule]
      });

      validatorFactory = TestBed.get(VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN);
    }));
  }));
}));
```
