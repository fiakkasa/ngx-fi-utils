import { async, inject, TestBed } from '@angular/core/testing';
import {
  factoryInstanceWithOptions,
  ValidatorInstanceCreatorWithOptionsDefinition,
  VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN
} from './validator-with-options.provider';

describe('ValidatorInstanceProviderWithOptions', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN, useFactory: factoryInstanceWithOptions }]
    });
  }));

  it('should be function', inject([VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN], (obj: ValidatorInstanceCreatorWithOptionsDefinition) => {
    expect(typeof obj).toBe('function');
  }));

  it('should be object once invoked', inject(
    [VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN],
    (obj: ValidatorInstanceCreatorWithOptionsDefinition) => {
      expect(obj({}) instanceof Object).toBe(true);
    }
  ));

  it('should validate with respective options', inject(
    [VALIDATOR_INSTANCE_CREATOR_WITH_OPTIONS_TOKEN],
    (obj: ValidatorInstanceCreatorWithOptionsDefinition) => {
      const validator = obj({ missingRefs: 'fail' });
      const result = validator.validate(
        {
          type: 'object',
          definitions: {
            fruit: {
              enums: ['apple', 'banana', 'strawberry']
            },
            color: {
              enums: ['red', 'green', 'blue']
            },
            preferences: {
              properties: {
                fruit: {
                  $ref: '#/definitions/fruit'
                },
                color: {
                  $ref: '#/definitions/color'
                }
              }
            }
          },
          properties: {
            preferences: {
              $ref: '#/definitions/preferences'
            }
          }
        },
        {
          preferences: {
            fruit: 'banana',
            color: 'green'
          }
        }
      );

      expect(result).toBe(true);
    }
  ));
});
