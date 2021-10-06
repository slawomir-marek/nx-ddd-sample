import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@sample-app/catalog/domain';
import { BoxesComponent } from './boxes.component';

@NgModule({
  imports: [CommonModule, CatalogDomainModule],
  declarations: [
    BoxesComponent
  ],
  exports: [
    BoxesComponent
  ],
})
export class CatalogFeatureBoxesModule {}
