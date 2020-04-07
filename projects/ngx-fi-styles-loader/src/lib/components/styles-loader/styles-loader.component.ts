// tslint:disable:component-selector
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { assign, get, isString, pick, reduce } from 'lodash-es';
import { IStylesLoaderComponent } from '../../interfaces/istyles-loader-component.interface';
import { StyleItem } from '../../interfaces/style-item.interface';
import { StylesLoaderConfig } from '../../interfaces/styles-loader-config.interface';
import { StylesLoaderService } from '../../services/styles-loader.service';
@Component({
  selector: 'styles-loader',
  template: `
    <ng-container *ngIf="!!Items?.length">
      <ng-container *ngFor="let obj of Items; trackBy: trackByKey">
        <ng-container *ngIf="obj.$ | async as style">
          <link async rel="stylesheet" [attr.data-url]="obj.url" [href]="style | safeUrl" />
        </ng-container>
      </ng-container>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesLoaderComponent implements IStylesLoaderComponent {
  private items: StyleItem[] = [];
  readonly _ = { assign, reduce, isString, pick, get };

  get Items(): StyleItem[] {
    return this.items;
  }

  @Input()
  set Config(value: StylesLoaderConfig) {
    const { collection, handling } = this._.pick(value, ['collection', 'handling']);

    this.items = Object.values(
      this._.reduce(
        collection,
        (items: { [key: string]: StyleItem }, url: string) =>
          (!!url &&
            this._.isString(url) &&
            this._.assign(items, {
              [url]: {
                key: url,
                url,
                $: this.loaderService.getStyle$(url, this._.get(handling, url))
              }
            })) ||
          items,
        {}
      )
    );
  }

  constructor(private loaderService: StylesLoaderService) {}

  trackByKey = (index: number, { key = `${index}` }: { key?: string }): string => key;
}
