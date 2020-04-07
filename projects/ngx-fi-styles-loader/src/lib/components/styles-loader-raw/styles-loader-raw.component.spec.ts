import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafeUrlPipe } from '../../pipes/safe-url/safe-url.pipe';
import { StylesLoaderRawComponent } from './styles-loader-raw.component';

describe('StylesLoaderRawComponent', () => {
  let component: StylesLoaderRawComponent;
  let fixture: ComponentFixture<StylesLoaderRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StylesLoaderRawComponent, //
        SafeUrlPipe
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StylesLoaderRawComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    fixture.destroy();
  });

  describe('Props', () => {
    describe('Collection / Items', () => {
      it('should set items', () => {
        component.Collection = ['', 1 as any, 'banana', 'strawberry', 'apple'];
        expect(component.Items.length).toBe(3);
      });
    });
  });

  describe('trackByValue', () => {
    it('should return key', () => {
      expect(component.trackByValue(0, 'banana')).toBe('banana');
    });
  });
});
