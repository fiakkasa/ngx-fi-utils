import { InjectionToken } from '@angular/core';
import * as Ajv from 'ajv';

export const validator: Ajv.Ajv = new Ajv();
export type ValidatorDefinition = typeof validator;
export const VALIDATOR_TOKEN = new InjectionToken<ValidatorDefinition>('validator');

export function factory(): ValidatorDefinition {
  return validator;
}
