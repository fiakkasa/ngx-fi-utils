import { NgModule } from '@angular/core';
import { ONLINE_INSTANCE, ONLINE_TOKEN } from './providers/online.provider';

@NgModule({
  providers: [{ provide: ONLINE_TOKEN, useValue: ONLINE_INSTANCE }]
})
export class NgxFiOnlineModule {}
