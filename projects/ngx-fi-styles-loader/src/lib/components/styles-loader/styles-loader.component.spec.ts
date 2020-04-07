import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StyleHandlingMode } from '../../enums/style-handling-mode.enum';
import { SafeUrlPipe } from '../../pipes/safe-url/safe-url.pipe';
import { StylesLoaderService } from '../../services/styles-loader.service';
import { StylesLoaderComponent } from './styles-loader.component';

describe('StylesLoaderComponent', () => {
  let component: StylesLoaderComponent;
  let fixture: ComponentFixture<StylesLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StylesLoaderComponent, //
        SafeUrlPipe
      ],
      providers: [
        {
          provide: StylesLoaderService,
          useValue: { getStyle$: () => of(null) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StylesLoaderComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    fixture.destroy();
  });

  describe('Props', () => {
    describe('Config / Items', () => {
      it('should set items', () => {
        component.Config = {
          collection: ['', 1 as any, 'banana', 'strawberry', 'apple'],
          handling: {
            banana: StyleHandlingMode.Literal,
            strawberry: StyleHandlingMode.PassThrough
          }
        };
        expect(component.Items.length).toBe(3);
      });
    });
  });

  describe('trackByKey', () => {
    it('should return key', () => {
      expect(component.trackByKey(0, { key: 'banana' })).toBe('banana');
    });

    it('should return index', () => {
      expect(component.trackByKey(0, {})).toBe('0');
    });
  });
});
