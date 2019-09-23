import { async, inject, TestBed } from '@angular/core/testing';
import { factory, validator, ValidatorDefinition, VALIDATOR_TOKEN } from './validator.provider';

describe('ValidatorProvider', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: VALIDATOR_TOKEN, useFactory: factory }]
    });
  }));

  it('should be object', inject([VALIDATOR_TOKEN], (obj: ValidatorDefinition) => {
    expect(obj instanceof Object).toBe(true);
  }));

  it('should be of the same instance - singleton', inject([VALIDATOR_TOKEN], (obj: ValidatorDefinition) => {
    expect(validator).toEqual(obj);
    expect(validator).toBe(obj);
  }));
});
