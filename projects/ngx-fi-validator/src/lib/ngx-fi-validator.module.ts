import { InjectionToken, NgModule } from '@angular/core';
import * as Ajv from 'ajv';

export const validator = new Ajv();
export type ValidatorDefinition = typeof validator;
export const VALIDATOR_TOKEN = new InjectionToken<ValidatorDefinition>('validator');

export function factory() {
  return validator;
}

@NgModule({
  providers: [{ provide: VALIDATOR_TOKEN, useFactory: factory }]
})
export class NgxFiValidatorModule {}
