import { async, inject, TestBed } from '@angular/core/testing';
import { OnlineDefinition, ONLINE_INSTANCE, ONLINE_TOKEN } from './online.provider';

describe('OnlineProvider', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ONLINE_TOKEN, useValue: ONLINE_INSTANCE }]
    });
  }));

  it('should be function', inject([ONLINE_TOKEN], (online: OnlineDefinition) => {
    expect(typeof online.is).toBe('function');
  }));

  it('should match navigator.onLine', inject([ONLINE_TOKEN], (online: OnlineDefinition) => {
    expect(online.is()).toBe(navigator.onLine);
  }));
});
