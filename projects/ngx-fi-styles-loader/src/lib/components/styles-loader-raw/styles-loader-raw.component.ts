// tslint:disable:component-selector
import { ChangeDetectionStrategy, Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { Dictionary, LoDashStatic } from 'lodash';
import { LODASH_TOKEN } from 'ngx-fi-lodash';
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

  get Items(): string[] {
    return this.items;
  }

  @Input()
  set Collection(value: string[]) {
    this.items = Object.values(
      this._.reduce(
        value,
        (items: Dictionary<string>, url: string) => (!!url && this._.isString(url) && Object.assign(items, { [url]: url })) || items,
        {}
      )
    );
  }

  constructor(@Inject(LODASH_TOKEN) private _: LoDashStatic) {}

  trackByValue = (index: number, value: string): string => value;
}
