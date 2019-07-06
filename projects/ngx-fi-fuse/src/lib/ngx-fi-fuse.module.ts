import { InjectionToken, NgModule } from '@angular/core';
import * as Fuse from 'fuse.js';

export function fuseFactory<T = any>(collection: T[], options: Fuse.FuseOptions<T>) {
  return new Fuse<T>(collection, options);
}

export function factory() {
  return fuseFactory;
}

export type FuseFactoryDefinition = typeof fuseFactory;
export const FUSE_TOKEN = new InjectionToken<FuseFactoryDefinition>('fuse');

@NgModule({
  providers: [{ provide: FUSE_TOKEN, useFactory: factory }]
})
export class NgxFiFuseModule {}
