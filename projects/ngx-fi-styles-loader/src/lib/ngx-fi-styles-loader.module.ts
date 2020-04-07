import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StylesLoaderRawComponent } from './components/styles-loader-raw/styles-loader-raw.component';
import { StylesLoaderComponent } from './components/styles-loader/styles-loader.component';
import { SafeUrlPipe } from './pipes/safe-url/safe-url.pipe';
import { StylesLoaderService } from './services/styles-loader.service';

const components = [StylesLoaderComponent, StylesLoaderRawComponent];

@NgModule({
  declarations: [...components, SafeUrlPipe],
  entryComponents: components,
  exports: components,
  imports: [CommonModule, HttpClientModule],
  providers: [StylesLoaderService]
})
export class NgxFiStylesLoaderModule {}
