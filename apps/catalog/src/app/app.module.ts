import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogFeatureManageModule } from '@sample-app/catalog/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { CatalogFeatureBoxesModule } from '@sample-app/catalog/feature-boxes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CatalogFeatureManageModule, HttpClientModule, CatalogFeatureBoxesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
