import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { discardPeriodicTasks, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { skip } from 'rxjs/operators';
import { StyleHandlingMode } from '../enums/style-handling-mode.enum';
import { StylesLoaderService } from './styles-loader.service';

describe('StylesLoaderService', () => {
  let service: StylesLoaderService;
  let http: HttpClient;
  const fakeAsyncFinalizer = () => {
    tick();
    flushMicrotasks();
    discardPeriodicTasks();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(StylesLoaderService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isStyleLoading', () => {
    it('should return boolean', () => {
      expect(typeof service.isStyleLoading('banana')).toBe('boolean');
    });
  });

  describe('isStyleLoading$', () => {
    it('should return boolean', fakeAsync(() => {
      let result;
      service.isStyleLoading$('banana').subscribe(x => (result = x));
      expect(typeof result).toBe('boolean');
      fakeAsyncFinalizer();
    }));
  });

  describe('areStylesLoading', () => {
    it('should return boolean', () => {
      expect(typeof service.areStylesLoading(['banana'])).toBe('boolean');
    });
  });

  describe('areStylesLoading$', () => {
    it('should return boolean', fakeAsync(() => {
      let result;
      service.areStylesLoading$(['banana']).subscribe(x => (result = x));
      expect(typeof result).toBe('boolean');
      fakeAsyncFinalizer();
    }));
  });

  describe('getStyle$', () => {
    it('should return uri - success', fakeAsync(() => {
      spyOn(http, 'get').and.returnValue(of(new Blob(['strawberry'], { type: 'text/css' })));
      spyOn(service, 'isStyleLoading').and.returnValue(false);
      const loading = [];
      service.loadingStyles$.pipe(skip(1)).subscribe(x => loading.push(x));
      let result;
      service.getStyle$('banana').subscribe(x => (result = x));
      expect(result).toBe('banana');
      expect(loading.length).toBe(2);
      fakeAsyncFinalizer();
    }));

    it('should return uri - StyleHandlingMode.PassThrough - success', fakeAsync(() => {
      const get = spyOn(http, 'get').and.returnValue(of(new Blob(['strawberry'], { type: 'text/css' })));
      spyOn(service, 'isStyleLoading').and.returnValue(false);
      const loading = [];
      service.loadingStyles$.pipe(skip(1)).subscribe(x => loading.push(x));
      let result;
      service.getStyle$('banana', StyleHandlingMode.PassThrough).subscribe(x => (result = x));
      expect(result).toBe('banana');
      expect(loading.length).toBe(0);
      expect(get).not.toHaveBeenCalled();
      fakeAsyncFinalizer();
    }));

    it('should return uri - StyleHandlingMode.Literal - success', fakeAsync(() => {
      spyOn(http, 'get').and.returnValue(of(new Blob(['strawberry'], { type: 'text/css' })));
      spyOn(service, 'isStyleLoading').and.returnValue(false);
      const loading = [];
      service.loadingStyles$.pipe(skip(1)).subscribe(x => loading.push(x));
      let result;
      service.getStyle$('banana', StyleHandlingMode.Literal).subscribe(x => (result = x));
      expect(result).toContain('blob:http://');
      expect(loading.length).toBe(2);
      fakeAsyncFinalizer();
    }));

    it('should return null - invalid url', fakeAsync(() => {
      const get = spyOn(http, 'get').and.returnValue(of(new Blob(['strawberry'], { type: 'text/css' })));
      spyOn(service, 'isStyleLoading').and.returnValue(true);
      let result;
      service.getStyle$(1 as any).subscribe(x => (result = x));
      expect(result).toBeNull();
      expect(get).not.toHaveBeenCalled();
      fakeAsyncFinalizer();
    }));

    it('should return null - loading', fakeAsync(() => {
      const get = spyOn(http, 'get').and.returnValue(of(new Blob(['strawberry'], { type: 'text/css' })));
      spyOn(service, 'isStyleLoading').and.returnValue(true);
      let result;
      service.getStyle$('banana').subscribe(x => (result = x));
      expect(result).toBeNull();
      expect(get).not.toHaveBeenCalled();
      fakeAsyncFinalizer();
    }));

    it('should return null - fail', fakeAsync(() => {
      spyOn(http, 'get').and.returnValue(throwError('strawberry'));
      spyOn(service, 'isStyleLoading').and.returnValue(false);
      let result;
      service.getStyle$('banana').subscribe(x => (result = x));
      expect(result).toBeNull();
      fakeAsyncFinalizer();
    }));
  });
});
