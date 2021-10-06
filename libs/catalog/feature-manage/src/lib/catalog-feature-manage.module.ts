import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@sample-app/catalog/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, CatalogDomainModule],
  declarations: [
    ManageComponent
  ],
  exports: [
    ManageComponent
  ],
})
export class CatalogFeatureManageModule {}
