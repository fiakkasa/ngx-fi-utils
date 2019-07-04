import { InjectionToken, NgModule } from '@angular/core';
import * as _ from 'lodash';
import { LoDashStatic } from 'lodash';

export const LODASH_TOKEN = new InjectionToken<LoDashStatic>('_');

@NgModule({
  providers: [{ provide: LODASH_TOKEN, useValue: _ }]
})
export class NgxLodashModule {}
