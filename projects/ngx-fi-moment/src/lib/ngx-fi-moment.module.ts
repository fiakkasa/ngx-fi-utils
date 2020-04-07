import { InjectionToken, NgModule } from '@angular/core';
import * as moment from 'moment';
import { Moment, MomentFormatSpecification, MomentInput } from 'moment';

export type MomentFn = (inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean) => Moment;
export { Moment } from 'moment';
export type MomentDefinition = Moment & MomentFn;
export const MOMENT_TOKEN = new InjectionToken<MomentDefinition>('moment');

export function factory(): MomentDefinition {
  return moment as any as MomentDefinition;
}

@NgModule({
  providers: [{ provide: MOMENT_TOKEN, useFactory: factory }]
})
export class NgxFiMomentModule {}
