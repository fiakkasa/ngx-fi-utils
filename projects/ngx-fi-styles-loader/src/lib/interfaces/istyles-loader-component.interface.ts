import { StyleItem } from './style-item.interface';
import { StylesLoaderConfig } from './styles-loader-config.interface';

export interface IStylesLoaderComponent {
  Items: StyleItem[];
  Config: StylesLoaderConfig;
}
