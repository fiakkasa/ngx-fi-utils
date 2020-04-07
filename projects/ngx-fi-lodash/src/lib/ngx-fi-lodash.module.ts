import { InjectionToken, NgModule } from '@angular/core';
import * as _ from 'lodash';
import { LoDashStatic } from 'lodash';

export const LODASH_TOKEN = new InjectionToken<LoDashStatic>('_');

export function factory(): typeof _ {
  return _;
}

@NgModule({
  providers: [{ provide: LODASH_TOKEN, useFactory: factory }]
})
export class NgxFiLodashModule {}
