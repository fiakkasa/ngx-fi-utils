import { InjectionToken } from '@angular/core';

export function is(): boolean {
  return (window as any).navigator && (window as any).navigator.onLine;
}

const onlineInstance = { is };
export type OnlineDefinition = typeof onlineInstance;
export const ONLINE_INSTANCE = onlineInstance;
export const ONLINE_TOKEN = new InjectionToken<OnlineDefinition>('online');
