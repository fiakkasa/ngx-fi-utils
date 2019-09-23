import { InjectionToken } from '@angular/core';
import * as Ajv from 'ajv';
import { Options as AjvOptions } from 'ajv';
import { ValidatorDefinition } from './validator.provider';

export { Options as AjvOptions } from 'ajv';
export type ValidatorInstanceCreatorWithOptionsDefinition = (options: AjvOptions) => ValidatorDefinition;
export const VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN = new InjectionToken<ValidatorInstanceCreatorWithOptionsDefinition>(
  'validator_instance_creator_with_options'
);

export function factoryInstanceWithOptions(): ValidatorInstanceCreatorWithOptionsDefinition {
  return (options: AjvOptions) => new Ajv(options);
}
