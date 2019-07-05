import { InjectionToken, NgModule } from '@angular/core';
import * as moment from 'moment';

export type MomentDefinition = typeof moment;
export const MOMENT_TOKEN = new InjectionToken<MomentDefinition>('moment');

export function factory() {
  return moment;
}

@NgModule({
  providers: [{ provide: MOMENT_TOKEN, useFactory: factory }]
})
export class NgxFiMomentModule {}
