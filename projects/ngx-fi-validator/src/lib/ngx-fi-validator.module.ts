import { NgModule } from '@angular/core';
import { factoryInstanceWithOptions, VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN } from './providers/validator-with-options.provider';
import { factory, VALIDATOR_TOKEN } from './providers/validator.provider';

@NgModule({
  providers: [
    { provide: VALIDATOR_TOKEN, useFactory: factory }, //
    { provide: VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN, useFactory: factoryInstanceWithOptions }
  ]
})
export class NgxFiValidatorModule {}
