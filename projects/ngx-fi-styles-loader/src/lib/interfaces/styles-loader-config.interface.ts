import { Dictionary } from 'lodash';
import { StyleHandlingMode } from '../enums/style-handling-mode.enum';

export interface StylesLoaderConfig {
  collection: string[];
  handling?: Dictionary<StyleHandlingMode>;
}
