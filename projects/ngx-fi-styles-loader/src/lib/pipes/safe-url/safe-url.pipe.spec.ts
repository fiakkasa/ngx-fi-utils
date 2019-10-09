import { SafeUrlPipe } from './safe-url.pipe';

describe('SafeUrlPipe', () => {
  let pipe: SafeUrlPipe;
  let bypassSecurityTrustResourceUrl: jasmine.Spy;

  beforeEach(() => {
    bypassSecurityTrustResourceUrl = jasmine.createSpy().and.returnValue(null);
    pipe = new SafeUrlPipe({ bypassSecurityTrustResourceUrl } as any);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should call bypassSecurityTrustResourceUrl', () => {
      pipe.transform('test');
      expect(bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    });
  });
});
