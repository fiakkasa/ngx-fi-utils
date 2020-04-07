// tslint:disable:component-selector
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { assign, isString, reduce } from 'lodash-es';
import { IStylesLoaderRawComponent } from '../../interfaces/istyles-loader-raw-component.interface';

@Component({
  selector: 'styles-loader-raw',
  template: `
    <ng-container *ngIf="!!Items?.length">
      <ng-container *ngFor="let value of Items; trackBy: trackByValue">
        <ng-container *ngIf="!!value">
          <link async rel="stylesheet" [attr.data-url]="value" [href]="value | safeUrl" />
        </ng-container>
      </ng-container>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesLoaderRawComponent implements IStylesLoaderRawComponent {
  private items: string[] = [];
  readonly _ = { assign, isString, reduce };

  get Items(): string[] {
    return this.items;
  }

  @Input()
  set Collection(value: string[]) {
    this.items = Object.values(
      this._.reduce(
        value,
        (items: { [key: string]: string }, url: string) => (!!url && this._.isString(url) && this._.assign(items, { [url]: url })) || items,
        {}
      )
    );
  }

  trackByValue = (index: number, value: string): string => value;
}
